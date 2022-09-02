import { Observable } from "rxjs";
import { CentreRechargeService } from "../centreRecharge.service";
import { CentreRecharge } from "../centreRecharge";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-centreRechargeforUser-list",
  templateUrl: "./centreRechargeforUser-list.component.html",
  styleUrls: ["./centreRechargeforUser-list.component.css"]
})
export class CentreRechargeforUserListComponent implements OnInit {
  centreRecharges: Observable<CentreRecharge[]>;

  constructor(private centreRechargeService: CentreRechargeService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.centreRecharges = this.centreRechargeService.getCentreRechargesList();
  }

}
