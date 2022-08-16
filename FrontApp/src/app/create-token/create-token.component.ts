import { TokenService } from '../token.service';
import { TypetokenService } from '../typetoken.service';
import { CompteurService } from '../compteur.service';
import { Token } from '../token';
import { Typetoken } from '../typetoken';
import { Compteur } from '../compteur';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { TokenStorageService } from '../_services/token-storage.service';
import { CompteurLoggedUserService } from "../compteurLoggedUser.service";



@Component({
  selector: 'app-create-token',
  templateUrl: './create-token.component.html',
  styleUrls: ['./create-token.component.css']
})
export class CreateTokenComponent implements OnInit {

  token: Token = new Token();
  typetokens: Observable<Typetoken[]>;
  compteurs: Observable<Compteur[]>;
  
  submitted = false;
  username: string;

  constructor(private tokenService: TokenService,private typetokenService: TypetokenService,
    private compteurService: CompteurService, private router: Router,private tokenStorageService: TokenStorageService,private compteurLoggedUserService: CompteurLoggedUserService) { }

    ngOnInit() {
      this.reloadData();
    }
  
    reloadData() {
      const user = this.tokenStorageService.getUser();

      this.username = user.username;
  
      this.compteurs = this.compteurLoggedUserService.getCompteurLoggedUsername(this.username);
  
      //this.typetokens = this.typetokenService.getTypetokensList();
      this.typetokens = this.typetokenService.getTypetokensByUserList();
      //this.compteurs = this.compteurService.getCompteursList();
    }
  
  newToken(): void {
    this.submitted = false;
    this.token = new Token();
  }

  save() {
    this.tokenService.createTokenUsername(this.token)
      .subscribe(data => console.log(data), error => console.log(error));
    this.token = new Token();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/tokenLoggedUsers']);
  }
}