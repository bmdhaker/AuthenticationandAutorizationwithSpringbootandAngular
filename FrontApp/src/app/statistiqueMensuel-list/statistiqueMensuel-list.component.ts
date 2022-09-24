import { Observable } from "rxjs";
import { StatistiqueMensuelService } from "../statistiqueMensuel.service";
import { StatistiqueMensuel } from "../statistiqueMensuel";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-statistiqueMensuel-list",
  templateUrl: "./statistiqueMensuel-list.component.html",
  styleUrls: ["./statistiqueMensuel-list.component.css"]
})
export class StatistiqueMensuelListComponent implements OnInit {
  statistiqueMensuels: Observable<StatistiqueMensuel[]>;

  constructor(private statistiqueMensuelService: StatistiqueMensuelService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.statistiqueMensuels = this.statistiqueMensuelService.getStatistiqueMensuelsList();
  }

}
