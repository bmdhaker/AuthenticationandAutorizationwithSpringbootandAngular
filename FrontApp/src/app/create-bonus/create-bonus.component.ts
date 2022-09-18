import { BonusService } from '../bonus.service';
import { Bonus } from '../bonus';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-bonus',
  templateUrl: './create-bonus.component.html',
  styleUrls: ['./create-bonus.component.css']
})
export class CreateBonusComponent implements OnInit {

  bonus: Bonus = new Bonus();
  submitted = false;

  constructor(private bonusService: BonusService,
    private router: Router) { }

  ngOnInit() {
  }

  newBonus(): void {
    this.submitted = false;
    this.bonus = new Bonus();
  }

  save() {
    this.bonusService.createBonus(this.bonus)
      .subscribe(data => console.log(data), error => console.log(error));
    this.bonus = new Bonus();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/bonuss']);
  }
}
