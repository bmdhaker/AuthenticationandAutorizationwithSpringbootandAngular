import { CentreRechargeService } from '../centreRecharge.service';
import { CentreRechargeform } from '../centrerechargeform';
import { GouvernoratService } from '../gouvernorat.service';
import { Gouvernorat } from '../gouvernorat';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-centreRecharge',
  templateUrl: './create-centreRecharge.component.html',
  styleUrls: ['./create-centreRecharge.component.css']
})
export class CreateCentreRechargeComponent implements OnInit {

  centreRechargeform: CentreRechargeform = new CentreRechargeform();
  gouvernorats: Observable<Gouvernorat[]>;
  submitted = false;

  constructor(private centreRechargeService: CentreRechargeService,private gouvernoratService: GouvernoratService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
      this.gouvernorats = this.gouvernoratService.getGouvernoratsList();
  }
  newCentreRecharge(): void {
    this.submitted = false;
    this.centreRechargeform = new CentreRechargeform();
  }

  save() {
    this.centreRechargeService.createCentreRecharge(this.centreRechargeform)
      .subscribe(data => console.log(data), error => console.log(error));
    this.centreRechargeform = new CentreRechargeform();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/centreRecharges']);
  }
}
