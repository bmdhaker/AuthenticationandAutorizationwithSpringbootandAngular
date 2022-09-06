import { Observable } from "rxjs";
import { ProfileService } from "../profile.service";
import { Profile } from "../profile";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';



@Component({
  selector: "app-update-profile-list",
  templateUrl: "./update-profile.component.html",
  styleUrls: ["./update-profile.component.css"]
})



export class UpdateProfileComponent implements OnInit {
  
  submitted = false;
  username: string;
  profile: Profile = new Profile();

  constructor(private profileService: ProfileService,private tokenStorageService: TokenStorageService,
    private router: Router) {}

    currentUser: any;

    ngOnInit() {
      const user = this.tokenStorageService.getUser();

      this.currentUser = this.tokenStorageService.getUser();
    }
    
    newProfile(): void {
      this.submitted = false;
      this.profile = new Profile();
    }
  
    save() {
      const user = this.tokenStorageService.getUser();
      this.username = user.username;
      this.profileService.updateLoggedProfile(this.username,this.profile)
        .subscribe(data => console.log(data), error => console.log(error));
      this.profile = new Profile();
    }
  
    onSubmit() {
      this.submitted = true;
      this.save();    
      this.tokenStorageService.signOut();
      this.router.navigate(['/login']);
    }
  

}
