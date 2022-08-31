import { Observable } from "rxjs";
import { RechargeService } from "../recharge.service";
import { Recharge } from "../recharge";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-recharge-list",
  templateUrl: "./recharge-list.component.html",
  styleUrls: ["./recharge-list.component.css"]
})
export class RechargeListComponent implements OnInit {
  recharges: Observable<Recharge[]>;

  constructor(private rechargeService: RechargeService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.recharges = this.rechargeService.getRechargesList();
  }

  deleteRecharge(id: number) {
    this.rechargeService.deleteRecharge(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  

  updateRecharge(id: number){
    this.router.navigate(['update-recharge', id]);
  }
}
