import { Observable } from "rxjs";
import { CentreRechargeService } from "../centreRecharge.service";
import { CentreRecharge } from "../centreRecharge";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-centreRecharge-list",
  templateUrl: "./centreRecharge-list.component.html",
  styleUrls: ["./centreRecharge-list.component.css"]
})
export class CentreRechargeListComponent implements OnInit {
  centreRecharges: Observable<CentreRecharge[]>;

  constructor(private centreRechargeService: CentreRechargeService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.centreRecharges = this.centreRechargeService.getCentreRechargesList();
  }

  deleteCentreRecharge(id: number) {
    this.centreRechargeService.deleteCentreRecharge(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  

  updateCentreRecharge(id: number){
    this.router.navigate(['update-centreRecharge', id]);
  }
}
