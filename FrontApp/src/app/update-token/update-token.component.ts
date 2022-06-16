import { Component, OnInit } from '@angular/core';
import { Token } from '../token';
import { Typetoken } from '../typetoken';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from '../token.service';
import { TypetokenService } from '../typetoken.service';
import { Observable } from "rxjs";

@Component({
  selector: 'app-update-token',
  templateUrl: './update-token.component.html',
  styleUrls: ['./update-token.component.css']
})
export class UpdateTokenComponent implements OnInit {

  id: number;
  ancienPrix: number;
  token: Token;
  typetokens: Observable<Typetoken[]>;


  constructor(private route: ActivatedRoute,private router: Router,
    private tokenService: TokenService,private typetokenService: TypetokenService) { }

  ngOnInit() {
    this.token = new Token();
    this.id = this.route.snapshot.params['id'];
    this.typetokens = this.typetokenService.getTypetokensList();

    this.tokenService.getToken(this.id)
      .subscribe(data => {
        console.log(data)
        this.token = data;
        this.ancienPrix=this.token.typetoken.prix;
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
