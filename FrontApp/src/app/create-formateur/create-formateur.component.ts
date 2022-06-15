import { FormateurService } from '../formateur.service';
import { Formateur } from '../formateur';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-formateur',
  templateUrl: './create-formateur.component.html',
  styleUrls: ['./create-formateur.component.css']
})
export class CreateFormateurComponent implements OnInit {

  formateur: Formateur = new Formateur();
  submitted = false;

  constructor(private formateurService: FormateurService,
    private router: Router) { }

  ngOnInit() {
  }

  newFormateur(): void {
    this.submitted = false;
    this.formateur = new Formateur();
  }

  save() {
    this.formateurService.createFormateur(this.formateur)
      .subscribe(data => console.log(data), error => console.log(error));
    this.formateur = new Formateur();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/formateurs']);
  }
}
