import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { TypetokenListComponent } from './typetoken-list/typetoken-list.component';
import { CreateTypetokenComponent } from './create-typetoken/create-typetoken.component';
import { UpdateTypetokenComponent } from './update-typetoken/update-typetoken.component';
import { TokenListComponent } from './token-list/token-list.component';
import { TokenLoggedUserListComponent } from './tokenLoggedUser-list/tokenLoggedUser-list.component';
import { CreateTokenComponent } from './create-token/create-token.component';
import { UpdateTokenComponent } from './update-token/update-token.component';
import { CompteurListComponent } from './compteur-list/compteur-list.component';
import { CreateCompteurComponent } from './create-compteur/create-compteur.component';
import { UpdateCompteurComponent } from './update-compteur/update-compteur.component';
import { UserListComponent } from './user-list/user-list.component';
import { CompteurByUserListComponent } from './compteurByUser-list/compteurByUser-list.component';
import { CompteurLoggedUserListComponent } from './compteurLoggedUser-list/compteurLoggedUser-list.component';
import { PanierListComponent } from './panier-list/panier-list.component';
import { SoldeListComponent } from './solde-list/solde-list.component';
import { CommandeListComponent } from './commande-list/commande-list.component';
import { CommandeLoggedUserListComponent } from './commandeLoggedUser-list/commandeLoggedUser-list.component';
import { CentreRechargeListComponent } from './centreRecharge-list/centreRecharge-list.component';
import { CreateCentreRechargeComponent } from './create-centreRecharge/create-centreRecharge.component';
import { UpdateCentreRechargeComponent } from './update-centreRecharge/update-centreRecharge.component';
import { CreateRechargeComponent } from './create-recharge/create-recharge.component';
import { RechargeListComponent } from './recharge-list/recharge-list.component';
import { CentreRechargeforUserListComponent } from './centreRechargeforUser-list/centreRechargeforUser-list.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'typetokens', component: TypetokenListComponent },
  { path: 'typetoken/new', component: CreateTypetokenComponent },
  { path: 'update-typetoken/:id', component: UpdateTypetokenComponent },
  { path: 'tokens', component: TokenListComponent },
  { path: 'tokenLoggedUsers', component: TokenLoggedUserListComponent },
  { path: 'token/new', component: CreateTokenComponent },
  { path: 'update-token/:id', component: UpdateTokenComponent },
  { path: 'compteurs', component: CompteurListComponent },
  { path: 'compteur/new', component: CreateCompteurComponent },
  { path: 'update-compteur/:id', component: UpdateCompteurComponent },
  { path: 'users', component: UserListComponent },
  { path: 'compteurByUsers', component: CompteurByUserListComponent },
  { path: 'compteurLoggedUsers', component: CompteurLoggedUserListComponent },
  { path: 'paniers', component: PanierListComponent },
  { path: 'soldes', component: SoldeListComponent },
  { path: 'commandes', component: CommandeListComponent },
  { path: 'commandeLoggedUsers', component: CommandeLoggedUserListComponent },
  { path: 'centreRecharges', component: CentreRechargeListComponent },
  { path: 'centreRecharge/new', component: CreateCentreRechargeComponent },
  { path: 'update-centreRecharge/:id', component: UpdateCentreRechargeComponent },
  { path: 'recharge/new', component: CreateRechargeComponent },
  { path: 'recharges', component: RechargeListComponent },
  { path: 'centreRechargeforUsers', component: CentreRechargeforUserListComponent },
  { path: 'update-profile', component: UpdateProfileComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
