import { Observable } from "rxjs";
import { StatistiqueAnnuelService } from "../statistiqueAnnuel.service";
import { StatistiqueAnnuel } from "../statistiqueAnnuel";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-statistiqueAnnuel-list",
  templateUrl: "./statistiqueAnnuel-list.component.html",
  styleUrls: ["./statistiqueAnnuel-list.component.css"]
})
export class StatistiqueAnnuelListComponent implements OnInit {
  statistiqueAnnuels: Observable<StatistiqueAnnuel[]>;

  constructor(private statistiqueannuelService: StatistiqueAnnuelService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.statistiqueAnnuels = this.statistiqueannuelService.getStatistiqueAnnuelsList();
  }

}
