import { TokenService } from '../token.service';
import { TypetokenService } from '../typetoken.service';
import { Token } from '../token';
import { Typetoken } from '../typetoken';
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
  submitted = false;

  constructor(private tokenService: TokenService,private typetokenService: TypetokenService,
    private router: Router) { }

    ngOnInit() {
      this.reloadData();
    }
  
    reloadData() {
      this.typetokens = this.typetokenService.getTypetokensList();
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