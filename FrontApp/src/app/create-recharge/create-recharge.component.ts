import { RechargeService } from '../recharge.service';
import { Rechargeform } from '../rechargeform';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-create-recharge',
  templateUrl: './create-recharge.component.html',
  styleUrls: ['./create-recharge.component.css']
})
export class CreateRechargeComponent implements OnInit {

  rechargeform: Rechargeform = new Rechargeform();
  submitted = false;
  username: string;

  constructor(private rechargeService: RechargeService,private tokenStorageService: TokenStorageService,
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

  save2() {
    const user = this.tokenStorageService.getUser();
    this.username = user.username;
    this.rechargeService.rechargerwithLoggedcentreRecharge(this.username,this.rechargeform)
      .subscribe(data => console.log(data), error => console.log(error));
    this.rechargeform = new Rechargeform();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save2();    
  }

  gotoList() {
    this.router.navigate(['/recharges']);
  }
}
