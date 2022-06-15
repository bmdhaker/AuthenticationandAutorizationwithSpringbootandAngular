import { Component, OnInit } from '@angular/core';
import { Typetoken } from '../typetoken';
import { ActivatedRoute, Router } from '@angular/router';
import { TypetokenService } from '../typetoken.service';

@Component({
  selector: 'app-update-typetoken',
  templateUrl: './update-typetoken.component.html',
  styleUrls: ['./update-typetoken.component.css']
})
export class UpdateTypetokenComponent implements OnInit {

  id: number;
  typetoken: Typetoken;

  constructor(private route: ActivatedRoute,private router: Router,
    private typetokenService: TypetokenService) { }

  ngOnInit() {
    this.typetoken = new Typetoken();

    this.id = this.route.snapshot.params['id'];
    
    this.typetokenService.getTypetoken(this.id)
      .subscribe(data => {
        console.log(data)
        this.typetoken = data;
      }, error => console.log(error));
  }

  updateTypetoken() {
    this.typetokenService.updateTypetoken(this.id, this.typetoken)
      .subscribe(data => console.log(data), error => console.log(error));
    this.typetoken = new Typetoken();
    this.gotoList();
  }

  onSubmit() {
    this.updateTypetoken();    
  }

  gotoList() {
    this.router.navigate(['/typetokens']);
  }
}
