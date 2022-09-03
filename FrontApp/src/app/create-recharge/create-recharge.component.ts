import { RechargeService } from '../recharge.service';
import { Rechargeform } from '../rechargeform';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-recharge',
  templateUrl: './create-recharge.component.html',
  styleUrls: ['./create-recharge.component.css']
})
export class CreateRechargeComponent implements OnInit {

  rechargeform: Rechargeform = new Rechargeform();
  submitted = false;

  constructor(private rechargeService: RechargeService,
    private router: Router) { }

  ngOnInit() {
  }

  newRecharge(): void {
    this.submitted = false;
    this.rechargeform = new Rechargeform();
  }

  save() {
    this.rechargeService.createRecharge(this.rechargeform)
      .subscribe(data => console.log(data), error => console.log(error));
    this.rechargeform = new Rechargeform();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/recharges']);
  }
}
