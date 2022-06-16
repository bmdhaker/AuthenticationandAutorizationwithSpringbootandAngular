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
import { FormateurListComponent } from './formateur-list/formateur-list.component';
import { CreateFormateurComponent } from './create-formateur/create-formateur.component';
import { UpdateFormateurComponent } from './update-formateur/update-formateur.component';
import { TypetokenListComponent } from './typetoken-list/typetoken-list.component';
import { CreateTypetokenComponent } from './create-typetoken/create-typetoken.component';
import { UpdateTypetokenComponent } from './update-typetoken/update-typetoken.component';
import { TokenListComponent } from './token-list/token-list.component';
import { CreateTokenComponent } from './create-token/create-token.component';
import { UpdateTokenComponent } from './update-token/update-token.component';


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
    FormateurListComponent,
    CreateFormateurComponent,
    UpdateFormateurComponent,
    TypetokenListComponent,
    CreateTypetokenComponent,
    UpdateTypetokenComponent,
    TokenListComponent,
    CreateTokenComponent,
    UpdateTokenComponent,
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
