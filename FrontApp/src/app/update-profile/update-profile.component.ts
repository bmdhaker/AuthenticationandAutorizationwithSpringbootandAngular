import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../profile.service';
import { TokenStorageService } from '../_services/token-storage.service';


@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  id: number;
  profile: Profile;
  currentUser: User;
  telephone: string;
  password: string;

  constructor(private route: ActivatedRoute,private router: Router,private token: TokenStorageService,
    private profileService: ProfileService) { }

  ngOnInit() {
      this.currentUser = this.token.getUser();
    }
  

  updateProfile2() {
    
    this.profileService.updateProfile2(this.telephone,this.password)
      .subscribe(data => console.log(data), error => console.log(error));
    //this.currentUser = new User();
    //this.gotoList();
  }


  onSubmit() {
    this.telephone = this.route.snapshot.params['telephone'];
    this.password = this.route.snapshot.params['password'];
    this.updateProfile2();    
  }

  gotoList() {
    this.router.navigate(['/profiles']);
  }
}
