import { Component, OnInit } from '@angular/core';
import { Token } from '../token';
import { Typetoken } from '../typetoken';
import { Compteur } from '../compteur';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from '../token.service';
import { TypetokenService } from '../typetoken.service';
import { CompteurService } from '../compteur.service';
import { Observable } from "rxjs";

@Component({
  selector: 'app-update-token',
  templateUrl: './update-token.component.html',
  styleUrls: ['./update-token.component.css']
})
export class UpdateTokenComponent implements OnInit {

  id: number;
  ancienPrix: number;
  ancienCompteur: string;
  token: Token;
  typetokens: Observable<Typetoken[]>;
  compteurs: Observable<Compteur[]>;


  constructor(private route: ActivatedRoute,private router: Router,
    private tokenService: TokenService,private typetokenService: TypetokenService,private compteurService: CompteurService) { }

  ngOnInit() {
    this.token = new Token();
    this.id = this.route.snapshot.params['id'];
    this.typetokens = this.typetokenService.getTypetokensList();
    this.compteurs = this.compteurService.getCompteursList();

    this.tokenService.getToken(this.id)
      .subscribe(data => {
        console.log(data)
        this.token = data;
        this.ancienPrix=this.token.typetoken.prix;
        this.ancienCompteur=this.token.compteur.libelle;
      }, error => console.log(error));
  }

  updateToken() {
    this.tokenService.updateToken(this.id, this.token)
      .subscribe(data => console.log(data), error => console.log(error));
    this.token = new Token();
    this.gotoList();
  }

  onSubmit() {
    this.updateToken();    
  }

  gotoList() {
    this.router.navigate(['/tokens']);
  }
}
