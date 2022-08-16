import { Observable } from "rxjs";
import { SoldeService } from "../solde.service";
import { Solde } from "../solde";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';


@Component({
  selector: "app-solde-list",
  templateUrl: "./solde-list.component.html",
  styleUrls: ["./solde-list.component.css"]
})
export class SoldeListComponent implements OnInit {
  soldes: Observable<Solde[]>;
  username: string;

  constructor(private soldeService: SoldeService,private tokenStorageService: TokenStorageService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    const user = this.tokenStorageService.getUser();

    this.username = user.username;

    //this.compteurLoggedUsers = this.compteurLoggedUserService.getCompteurLoggedUsername(this.username);
    //this.soldes = this.soldeService.getSoldesList();
    this.soldes = this.soldeService.getSoldesList(this.username);
  }

  deleteSolde(id: number) {
    this.soldeService.deleteSolde(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  

  updateSolde(id: number){
    this.router.navigate(['update-solde', id]);
  }
}
