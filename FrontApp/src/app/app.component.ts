import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
import { SoldeService } from './solde.service';
import { Solde } from './solde';
import { Observable } from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  showSimpleUserBoard = false;

  username: string;
  valeurSolde:string;
  soldes: Observable<Solde[]>;
  constructor(private tokenStorageService: TokenStorageService, private soldeService:SoldeService) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();

      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.showSimpleUserBoard = this.roles.includes('ROLE_USER');

      this.username = user.username;
      this.soldes = this.soldeService.getSoldesofUser(this.username);
      this.valeurSolde=this.soldes.forEach.toString();
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
