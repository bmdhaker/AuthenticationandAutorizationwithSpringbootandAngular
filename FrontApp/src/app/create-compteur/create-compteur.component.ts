import { CompteurService } from '../compteur.service';
import { Compteur } from '../compteur';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-compteur',
  templateUrl: './create-compteur.component.html',
  styleUrls: ['./create-compteur.component.css']
})
export class CreateCompteurComponent implements OnInit {

  compteur: Compteur = new Compteur();
  submitted = false;

  constructor(private compteurService: CompteurService,
    private router: Router) { }

  ngOnInit() {
  }

  newCompteur(): void {
    this.submitted = false;
    this.compteur = new Compteur();
  }

  save() {
    this.compteurService.createCompteur(this.compteur)
      .subscribe(data => console.log(data), error => console.log(error));
    this.compteur = new Compteur();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/compteurs']);
  }
}
