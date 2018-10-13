import { Routes } from '@angular/router';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'

export const appRoutes: Routes = [
  { path: '' , redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: HomeComponent, children: [{ path:'', component: RegisterComponent }]},
  { path: 'login', component: HomeComponent, children: [{ path:'', component: LoginComponent }]},
  { path: 'dashboard', component: DashboardComponent }
  // { path: '**', component: NotFound }
]