import { RechargeService } from '../recharge.service';
import { Recharge } from '../recharge';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-recharge',
  templateUrl: './create-recharge.component.html',
  styleUrls: ['./create-recharge.component.css']
})
export class CreateRechargeComponent implements OnInit {

  recharge: Recharge = new Recharge();
  submitted = false;

  constructor(private rechargeService: RechargeService,
    private router: Router) { }

  ngOnInit() {
  }

  newRecharge(): void {
    this.submitted = false;
    this.recharge = new Recharge();
  }

  save() {
    this.rechargeService.createRecharge(this.recharge)
      .subscribe(data => console.log(data), error => console.log(error));
    this.recharge = new Recharge();
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
