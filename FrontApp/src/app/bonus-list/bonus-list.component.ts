import { Observable } from "rxjs";
import { BonusService } from "../bonus.service";
import { Bonus } from "../bonus";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-bonus-list",
  templateUrl: "./bonus-list.component.html",
  styleUrls: ["./bonus-list.component.css"]
})
export class BonusListComponent implements OnInit {
  bonuss: Observable<Bonus[]>;

  constructor(private bonusService: BonusService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.bonuss = this.bonusService.getBonussList();
  }

  deleteBonus(id: number) {
    this.bonusService.deleteBonus(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  

  updateBonus(id: number){
    this.router.navigate(['update-bonus', id]);
  }
}
