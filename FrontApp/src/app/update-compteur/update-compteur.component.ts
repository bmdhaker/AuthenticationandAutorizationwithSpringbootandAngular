import { Component, OnInit } from '@angular/core';
import { Compteur } from '../compteur';
import { ActivatedRoute, Router } from '@angular/router';
import { CompteurService } from '../compteur.service';

@Component({
  selector: 'app-update-compteur',
  templateUrl: './update-compteur.component.html',
  styleUrls: ['./update-compteur.component.css']
})
export class UpdateCompteurComponent implements OnInit {

  id: number;
  compteur: Compteur;

  constructor(private route: ActivatedRoute,private router: Router,
    private compteurService: CompteurService) { }

  ngOnInit() {
    this.compteur = new Compteur();

    this.id = this.route.snapshot.params['id'];
    
    this.compteurService.getCompteur(this.id)
      .subscribe(data => {
        console.log(data)
        this.compteur = data;
      }, error => console.log(error));
  }

  updateCompteur() {
    this.compteurService.updateCompteur(this.id, this.compteur)
      .subscribe(data => console.log(data), error => console.log(error));
    this.compteur = new Compteur();
    this.gotoList();
  }

  onSubmit() {
    this.updateCompteur();    
  }

  gotoList() {
    this.router.navigate(['/compteurs']);
  }
}
