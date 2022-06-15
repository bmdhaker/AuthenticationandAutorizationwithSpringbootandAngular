import { Observable } from "rxjs";
import { TypetokenService } from "../typetoken.service";
import { Typetoken } from "../typetoken";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-typetoken-list",
  templateUrl: "./typetoken-list.component.html",
  styleUrls: ["./typetoken-list.component.css"]
})
export class TypetokenListComponent implements OnInit {
  typetokens: Observable<Typetoken[]>;

  constructor(private typetokenService: TypetokenService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.typetokens = this.typetokenService.getTypetokensList();
  }

  deleteTypetoken(id: number) {
    this.typetokenService.deleteTypetoken(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  

  updateTypetoken(id: number){
    this.router.navigate(['update-typetoken', id]);
  }
}
