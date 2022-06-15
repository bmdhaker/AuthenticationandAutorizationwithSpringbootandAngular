import { TypetokenService } from '../typetoken.service';
import { Typetoken } from '../typetoken';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-typetoken',
  templateUrl: './create-typetoken.component.html',
  styleUrls: ['./create-typetoken.component.css']
})
export class CreateTypetokenComponent implements OnInit {

  typetoken: Typetoken = new Typetoken();
  submitted = false;

  constructor(private typetokenService: TypetokenService,
    private router: Router) { }

  ngOnInit() {
  }

  newTypetoken(): void {
    this.submitted = false;
    this.typetoken = new Typetoken();
  }

  save() {
    this.typetokenService.createTypetoken(this.typetoken)
      .subscribe(data => console.log(data), error => console.log(error));
    this.typetoken = new Typetoken();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/typetokens']);
  }
}
