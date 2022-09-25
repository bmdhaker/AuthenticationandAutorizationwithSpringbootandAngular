import { Component, OnInit } from '@angular/core';
import { CompteurLoggedUser } from '../compteurLoggedUser';
import { ActivatedRoute, Router } from '@angular/router';
import { CompteurLoggedUserService } from '../compteurLoggedUser.service';

@Component({
  selector: 'app-update-compteurLoggedUser',
  templateUrl: './update-compteurLoggedUser.component.html',
  styleUrls: ['./update-compteurLoggedUser.component.css']
})
export class UpdateCompteurLoggedUserComponent implements OnInit {

  id: number;
  compteurLoggedUser: CompteurLoggedUser;

  constructor(private route: ActivatedRoute,private router: Router,
    private compteurLoggedUserService: CompteurLoggedUserService) { }

  ngOnInit() {
    this.compteurLoggedUser = new CompteurLoggedUser();

    this.id = this.route.snapshot.params['id'];
    
    this.compteurLoggedUserService.getCompteurLoggedUser(this.id)
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
