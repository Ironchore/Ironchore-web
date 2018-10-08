import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/misc/header/header.component';
import { LoginComponent } from './components/misc/login/login.component';
import { RegisterComponent } from './components/misc/register/register.component';
import { KidsComponent } from './components/kids/kids.component';
import { AwardsComponent } from './components/awards/awards.component';
import { ChoresComponent } from './components/chores/chores.component';
import { FormComponent } from './components/kids/form/form.component';
import { CreateComponent } from './components/kids/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    KidsComponent,
    AwardsComponent,
    ChoresComponent,
    FormComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
