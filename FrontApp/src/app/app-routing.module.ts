import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { FormateurListComponent } from './formateur-list/formateur-list.component';
import { CreateFormateurComponent } from './create-formateur/create-formateur.component';
import { UpdateFormateurComponent } from './update-formateur/update-formateur.component';
import { TypetokenListComponent } from './typetoken-list/typetoken-list.component';
import { CreateTypetokenComponent } from './create-typetoken/create-typetoken.component';
import { UpdateTypetokenComponent } from './update-typetoken/update-typetoken.component';
import { TokenListComponent } from './token-list/token-list.component';
import { CreateTokenComponent } from './create-token/create-token.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'formateurs', component: FormateurListComponent },
  { path: 'formateur/new', component: CreateFormateurComponent },
  { path: 'update-formateur/:id', component: UpdateFormateurComponent },
  { path: 'typetokens', component: TypetokenListComponent },
  { path: 'typetoken/new', component: CreateTypetokenComponent },
  { path: 'update-typetoken/:id', component: UpdateTypetokenComponent },
  { path: 'tokens', component: TokenListComponent },
  { path: 'token/new', component: CreateTokenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
