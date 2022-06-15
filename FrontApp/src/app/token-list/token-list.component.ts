import { Observable } from "rxjs";
import { TokenService } from "../token.service";
import { Token } from "../token";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-token-list",
  templateUrl: "./token-list.component.html",
  styleUrls: ["./token-list.component.css"]
})
export class TokenListComponent implements OnInit {
  tokens: Observable<Token[]>;

  constructor(private tokenService: TokenService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.tokens = this.tokenService.getTokensList();
  }

  deleteToken(id: number) {
    this.tokenService.deleteToken(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  

  updateToken(id: number){
    this.router.navigate(['update-token', id]);
  }
}
