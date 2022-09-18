import { Component, OnInit } from '@angular/core';
import { Bonus } from '../bonus';
import { ActivatedRoute, Router } from '@angular/router';
import { BonusService } from '../bonus.service';

@Component({
  selector: 'app-update-bonus',
  templateUrl: './update-bonus.component.html',
  styleUrls: ['./update-bonus.component.css']
})
export class UpdateBonusComponent implements OnInit {

  id: number;
  bonus: Bonus;

  constructor(private route: ActivatedRoute,private router: Router,
    private bonusService: BonusService) { }

  ngOnInit() {
    this.bonus = new Bonus();

    this.id = this.route.snapshot.params['id'];
    
    this.bonusService.getBonus(this.id)
      .subscribe(data => {
        console.log(data)
        this.bonus = data;
      }, error => console.log(error));
  }

  updateBonus() {
    this.bonusService.updateBonus(this.id, this.bonus)
      .subscribe(data => console.log(data), error => console.log(error));
    this.bonus = new Bonus();
    this.gotoList();
  }

  onSubmit() {
    this.updateBonus();    
  }

  gotoList() {
    this.router.navigate(['/bonuss']);
  }
}
