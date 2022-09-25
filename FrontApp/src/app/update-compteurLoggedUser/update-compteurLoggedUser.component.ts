import { Component, OnInit } from '@angular/core';
import { CompteurLoggedUser } from '../compteurLoggedUser';
import { Gouvernorat } from '../gouvernorat';
import { ActivatedRoute, Router } from '@angular/router';
import { CompteurLoggedUserService } from '../compteurLoggedUser.service';
import { GouvernoratService } from '../gouvernorat.service';
import { Observable } from "rxjs";

@Component({
  selector: 'app-update-compteurLoggedUser',
  templateUrl: './update-compteurLoggedUser.component.html',
  styleUrls: ['./update-compteurLoggedUser.component.css']
})
export class UpdateCompteurLoggedUserComponent implements OnInit {

  id: number;
  compteurLoggedUser: CompteurLoggedUser;


  constructor(private route: ActivatedRoute,private router: Router,
    private compteurLoggedUserService: CompteurLoggedUserService,private gouvernoratService: GouvernoratService) { }

  ngOnInit() {
    this.compteurLoggedUser = new CompteurLoggedUser();
    this.id = this.route.snapshot.params['id'];

    this.compteurLoggedUserService.getCompteurLoggedUserX(this.id)
      .subscribe(data => {
        console.log(data)
        this.compteurLoggedUser = data;
      }, error => console.log(error));
  }

  updateCompteurLoggedUser() {
    this.compteurLoggedUserService.updateCompteurLoggedUser(this.id, this.compteurLoggedUser)
      .subscribe(data => console.log(data), error => console.log(error));
    this.compteurLoggedUser = new CompteurLoggedUser();
    this.gotoList();
  }

  onSubmit() {
    this.updateCompteurLoggedUser();    
  }

  gotoList() {
    this.router.navigate(['/compteurLoggedUsers']);
  }
}
