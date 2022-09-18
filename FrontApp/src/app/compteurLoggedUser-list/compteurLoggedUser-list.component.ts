import { Observable } from "rxjs";
import { CompteurLoggedUserService } from "../compteurLoggedUser.service";
import { CompteurLoggedUser } from "../compteurLoggedUser";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';
import { CompteurByUserform } from '../compteurByUserform';




@Component({
  selector: "app-compteurLoggedUser-list",
  templateUrl: "./compteurLoggedUser-list.component.html",
  styleUrls: ["./compteurLoggedUser-list.component.css"]
})
export class CompteurLoggedUserListComponent implements OnInit {
  compteurLoggedUsers: Observable<CompteurLoggedUser[]>;
  compteurform: CompteurByUserform = new CompteurByUserform();
  submitted = false;
  username: string;
  lib: string;


  constructor(private compteurLoggedUserService: CompteurLoggedUserService,private tokenStorageService: TokenStorageService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {

    const user = this.tokenStorageService.getUser();

    this.username = user.username;

    this.compteurLoggedUsers = this.compteurLoggedUserService.getCompteurLoggedUsername(this.username);
  }

  deleteCompteurLoggedUser(id: number) {
    this.compteurLoggedUserService.deleteCompteurLoggedUser(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  

  updateCompteurLoggedUser(id: number){
    this.router.navigate(['update-compteurLoggedUser', id]);
  }

}
