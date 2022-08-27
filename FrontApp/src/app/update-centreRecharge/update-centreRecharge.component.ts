import { Component, OnInit } from '@angular/core';
import { CentreRecharge } from '../centreRecharge';
import { Gouvernorat } from '../gouvernorat';
import { ActivatedRoute, Router } from '@angular/router';
import { CentreRechargeService } from '../centreRecharge.service';
import { GouvernoratService } from '../gouvernorat.service';
import { Observable } from "rxjs";

@Component({
  selector: 'app-update-centreRecharge',
  templateUrl: './update-centreRecharge.component.html',
  styleUrls: ['./update-centreRecharge.component.css']
})
export class UpdateCentreRechargeComponent implements OnInit {

  id: number;
  ancienGouvernorat: string;
  centreRecharge: CentreRecharge;
  gouvernorats: Observable<Gouvernorat[]>;


  constructor(private route: ActivatedRoute,private router: Router,
    private centreRechargeService: CentreRechargeService,private gouvernoratService: GouvernoratService) { }

  ngOnInit() {
    this.centreRecharge = new CentreRecharge();
    this.id = this.route.snapshot.params['id'];
    this.gouvernorats = this.gouvernoratService.getGouvernoratsList();

    this.centreRechargeService.getCentreRecharge(this.id)
      .subscribe(data => {
        console.log(data)
        this.centreRecharge = data;
        this.ancienGouvernorat=this.centreRecharge.gouvernorat.nom;
      }, error => console.log(error));
  }

  updateCentreRecharge() {
    this.centreRechargeService.updateCentreRecharge(this.id, this.centreRecharge)
      .subscribe(data => console.log(data), error => console.log(error));
    this.centreRecharge = new CentreRecharge();
    this.gotoList();
  }

  onSubmit() {
    this.updateCentreRecharge();    
  }

  gotoList() {
    this.router.navigate(['/centreRecharges']);
  }
}
