import { Observable } from "rxjs";
import { CompteurService } from "../compteur.service";
import { Compteur } from "../compteur";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-compteur-list",
  templateUrl: "./compteur-list.component.html",
  styleUrls: ["./compteur-list.component.css"]
})
export class CompteurListComponent implements OnInit {
  compteurs: Observable<Compteur[]>;

  constructor(private compteurService: CompteurService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.compteurs = this.compteurService.getCompteursList();
  }

  deleteCompteur(id: number) {
    this.compteurService.deleteCompteur(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  

  updateCompteur(id: number){
    this.router.navigate(['update-compteur', id]);
  }
}
