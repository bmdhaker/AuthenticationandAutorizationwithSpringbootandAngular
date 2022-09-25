import { Observable } from "rxjs";
import { CompteurByUserService } from "../compteurByUser.service";
import { CompteurByUser } from "../compteurByUser";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-compteurByUser-list",
  templateUrl: "./compteurByUser-list.component.html",
  styleUrls: ["./compteurByUser-list.component.css"]
})
export class CompteurByUserListComponent implements OnInit {
  compteurByUsers: Observable<CompteurByUser[]>;

  constructor(private compteurByUserService: CompteurByUserService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.compteurByUsers = this.compteurByUserService.getCompteurByUsersList();
  }

  /*deleteCompteurByUser(id: number) {
    this.compteurByUserService.deleteCompteurByUser(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }*/

  

  /*updateCompteurByUser(id: number){
    this.router.navigate(['update-compteurByUser', id]);
  }*/
}
