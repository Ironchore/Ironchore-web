import { AwardsComponent } from './components/awards/awards.component';
import { KiddashboardComponent } from './components/kiddashboard/kiddashboard.component';
import { KidregisterComponent } from './components/user/kidregister/kidregister.component';
import { Routes } from '@angular/router';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { ChoresComponent } from './components/chores/chores.component';

export const appRoutes: Routes = [
  { path: '' , redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: HomeComponent, children: [{ path:'', component: RegisterComponent }]},
  { path: 'login', component: HomeComponent, children: [{ path:'', component: LoginComponent }]},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'kidregister', component: KidregisterComponent },
  { path: 'kiddashboard', component: KiddashboardComponent },
  { path: 'chores', component: ChoresComponent },
  { path: 'awards', component: AwardsComponent }
  // { path: '**', component: NotFound }
]