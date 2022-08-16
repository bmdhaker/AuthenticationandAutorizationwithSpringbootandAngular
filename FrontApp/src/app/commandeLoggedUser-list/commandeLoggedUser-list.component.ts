import { Observable } from "rxjs";
import { CommandeLoggedUserService } from "../commandeLoggedUser.service";
import { CommandeLoggedUser } from "../commandeLoggedUser";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';


@Component({
  selector: "app-commande-list",
  templateUrl: "./commandeLoggedUser-list.component.html",
  styleUrls: ["./commandeLoggedUser-list.component.css"]
})
export class CommandeLoggedUserListComponent implements OnInit {
  commandeLoggedUsers: Observable<CommandeLoggedUser[]>;
  username: string;

  constructor(private commandeLoggedUserService: CommandeLoggedUserService,private tokenStorageService: TokenStorageService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    const user = this.tokenStorageService.getUser();

    this.username = user.username;

    //this.compteurLoggedUsers = this.compteurLoggedUserService.getCompteurLoggedUsername(this.username);
    //this.commandes = this.commandeService.getCommandesList();
    this.commandeLoggedUsers = this.commandeLoggedUserService.getCommandesList(this.username);
  }

  deleteCommande(id: number) {
    this.commandeLoggedUserService.deleteCommande(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  

  updateCommande(id: number){
    this.router.navigate(['update-commande', id]);
  }
}
