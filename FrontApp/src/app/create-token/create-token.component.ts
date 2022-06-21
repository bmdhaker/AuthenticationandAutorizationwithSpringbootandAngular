import { TokenService } from '../token.service';
import { TypetokenService } from '../typetoken.service';
import { CompteurService } from '../compteur.service';
import { Token } from '../token';
import { Typetoken } from '../typetoken';
import { Compteur } from '../compteur';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from "rxjs";


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

  constructor(private tokenService: TokenService,private typetokenService: TypetokenService,
    private compteurService: CompteurService, private router: Router) { }

    ngOnInit() {
      this.reloadData();
    }
  
    reloadData() {
      this.typetokens = this.typetokenService.getTypetokensList();
      this.compteurs = this.compteurService.getCompteursList();
    }
  
  newToken(): void {
    this.submitted = false;
    this.token = new Token();
  }

  save() {
    this.tokenService.createToken(this.token)
      .subscribe(data => console.log(data), error => console.log(error));
    this.token = new Token();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/tokens']);
  }
}