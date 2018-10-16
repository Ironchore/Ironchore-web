import { appRoutes } from './routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 

import { AppComponent } from './app.component';
import { AwardsComponent } from './components/awards/awards.component';
import { ChoresComponent } from './components/chores/chores.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { KidregisterComponent } from './components/user/kidregister/kidregister.component';
import { KiddashboardComponent } from './components/kiddashboard/kiddashboard.component';
import { KidItemComponent } from './components/dashboard/kid-item/kid-item.component';
import { KidListComponent } from './components/dashboard/kid-list/kid-list.component';
import { ChoreCreateComponent } from './components/chores/chore-create/chore-create.component';
import { ChoreItemComponent } from './components/chores/chore-item/chore-item.component';
import { ChoreListComponent } from './components/chores/chore-list/chore-list.component';
import { HomeworkListComponent } from './components/kiddashboard/homework-list/homework-list.component';
import { HomeworkItemComponent } from './components/kiddashboard/homework-item/homework-item.component';


@NgModule({
  declarations: [
    AppComponent,
    AwardsComponent,
    ChoresComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    NavbarComponent,
    KidregisterComponent,
    KiddashboardComponent,
    KidItemComponent,
    KidListComponent,
    ChoreCreateComponent,
    ChoreItemComponent,
    ChoreListComponent,
    HomeworkListComponent,
    HomeworkItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
