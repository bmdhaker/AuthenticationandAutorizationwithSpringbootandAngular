import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { ProfileComponent } from './profile/profile.component';
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
import { BonusListComponent } from './bonus-list/bonus-list.component';
import { CreateBonusComponent } from './create-bonus/create-bonus.component';
import { UpdateBonusComponent } from './update-bonus/update-bonus.component';
import { StatistiqueAnnuelListComponent } from './statistiqueAnnuel-list/statistiqueAnnuel-list.component';
import { StatistiqueMensuelListComponent } from './statistiqueMensuel-list/statistiqueMensuel-list.component';


import { authInterceptorProviders } from './_helpers/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardUserComponent,
    BoardModeratorComponent,
    ProfileComponent,
    TypetokenListComponent,
    CreateTypetokenComponent,
    UpdateTypetokenComponent,
    TokenListComponent,
    TokenLoggedUserListComponent,
    CreateTokenComponent,
    UpdateTokenComponent,
    CompteurListComponent,
    CreateCompteurComponent,
    UpdateCompteurComponent,
    UserListComponent,
    CompteurByUserListComponent,
    CompteurLoggedUserListComponent,
    PanierListComponent,
    SoldeListComponent,
    CommandeListComponent,
    CommandeLoggedUserListComponent,
    CentreRechargeListComponent,
    CreateCentreRechargeComponent,
    UpdateCentreRechargeComponent,
    CreateRechargeComponent,
    RechargeListComponent,
    CentreRechargeforUserListComponent,
    UpdateProfileComponent,
    BonusListComponent,
    CreateBonusComponent,
    UpdateBonusComponent,
    StatistiqueAnnuelListComponent,
    StatistiqueMensuelListComponent,
    ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
