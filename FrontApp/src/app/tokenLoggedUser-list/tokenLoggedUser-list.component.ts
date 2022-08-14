import { Observable } from "rxjs";
import { TokenLoggedUserService } from "../tokenLoggedUser.service";
import { TokenLoggedUser } from "../tokenLoggedUser";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';



@Component({
  selector: "app-tokenLoggedUser-list",
  templateUrl: "./tokenLoggedUser-list.component.html",
  styleUrls: ["./tokenLoggedUser-list.component.css"]
})
export class TokenLoggedUserListComponent implements OnInit {
  tokenLoggedUsers: Observable<TokenLoggedUser[]>;

  username: string;

  constructor(private tokenLoggedUserService: TokenLoggedUserService,private tokenStorageService: TokenStorageService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {

    const user = this.tokenStorageService.getUser();

    this.username = user.username;

    this.tokenLoggedUsers = this.tokenLoggedUserService.getTokenLoggedUsername(this.username);
  }

  deleteTokenLoggedUser(id: number) {
    this.tokenLoggedUserService.deleteTokenLoggedUser(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  

  updateTokenLoggedUser(id: number){
    this.router.navigate(['update-tokenLoggedUser', id]);
  }
}
