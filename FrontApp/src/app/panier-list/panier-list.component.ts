import { Observable } from "rxjs";
import { PanierService } from "../panier.service";
import { Panier } from "../panier";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';


@Component({
  selector: "app-panier-list",
  templateUrl: "./panier-list.component.html",
  styleUrls: ["./panier-list.component.css"]
})
export class PanierListComponent implements OnInit {
  paniers: Observable<Panier[]>;
  username: string;

  constructor(private panierService: PanierService,private tokenStorageService: TokenStorageService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    const user = this.tokenStorageService.getUser();

    this.username = user.username;

    //this.compteurLoggedUsers = this.compteurLoggedUserService.getCompteurLoggedUsername(this.username);
    //this.paniers = this.panierService.getPaniersList();
    this.paniers = this.panierService.getPaniersList(this.username);
  }

  payerPanier(id: number) {
    this.panierService.payerPanier(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  

  updatePanier(id: number){
    this.router.navigate(['update-panier', id]);
  }
}
