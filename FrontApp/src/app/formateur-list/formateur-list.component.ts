import { Observable } from "rxjs";
import { FormateurService } from "../formateur.service";
import { Formateur } from "../formateur";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-formateur-list",
  templateUrl: "./formateur-list.component.html",
  styleUrls: ["./formateur-list.component.css"]
})
export class FormateurListComponent implements OnInit {
  formateurs: Observable<Formateur[]>;

  constructor(private formateurService: FormateurService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.formateurs = this.formateurService.getFormateursList();
  }

  deleteFormateur(id: number) {
    this.formateurService.deleteFormateur(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  

  updateFormateur(id: number){
    this.router.navigate(['update-formateur', id]);
  }
}
