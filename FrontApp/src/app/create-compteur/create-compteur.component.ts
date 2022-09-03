import { CompteurService } from '../compteur.service';
import { Compteur } from '../compteur';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';


@Component({
  selector: 'app-create-compteur',
  templateUrl: './create-compteur.component.html',
  styleUrls: ['./create-compteur.component.css']
})
export class CreateCompteurComponent implements OnInit {

  compteur: Compteur = new Compteur();
  submitted = false;
  username: string;

  constructor(private compteurService: CompteurService,private tokenStorageService: TokenStorageService,
    private router: Router) { }

  ngOnInit() {
  }

  newCompteur(): void {
    this.submitted = false;
    this.compteur = new Compteur();
  }

  save() {
    const user = this.tokenStorageService.getUser();
    this.username = user.username;
    this.compteurService.createCompteurwithuser(this.compteur,this.username)
      .subscribe(data => console.log(data), error => console.log(error));
    this.compteur = new Compteur();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/compteurLoggedUsers']);
  }
}
