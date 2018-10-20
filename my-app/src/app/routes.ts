import { AwardCreateComponent } from './components/awards/award-create/award-create.component';
import { ChoreCreateComponent } from './components/chores/chore-create/chore-create.component';
import { AwardsComponent } from './components/awards/awards.component';
import { KiddashboardComponent } from './components/kiddashboard/kiddashboard.component';
import { KidregisterComponent } from './components/user/kidregister/kidregister.component';
import { Routes } from '@angular/router';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { ChoresComponent } from './components/chores/chores.component';
import { HomeworkListComponent } from './components/kiddashboard/homework-list/homework-list.component';
import { PrizeListComponent } from './components/kiddashboard/prize-list/prize-list.component';
import { IsAuthenticatedGuard } from './shared/guards/is-authenticated.guard';

export const appRoutes: Routes = [
  { path: '' , redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: HomeComponent, children: [{ path:'', component: RegisterComponent }]},
  { path: 'login', component: HomeComponent, children: [{ path:'', component: LoginComponent }]},
  { path: 'dashboard', canActivate: [IsAuthenticatedGuard], component: DashboardComponent },
  { path: 'kidregister', canActivate: [IsAuthenticatedGuard], component: KidregisterComponent },
  { path: 'kiddashboard',canActivate: [IsAuthenticatedGuard], component: KiddashboardComponent },
  { path: 'chores', canActivate: [IsAuthenticatedGuard], component: ChoresComponent },
  { path: 'chorescreate', canActivate: [IsAuthenticatedGuard], component: ChoreCreateComponent },
  { path: 'awards', canActivate: [IsAuthenticatedGuard], component: AwardsComponent },
  { path: 'awardscreate', canActivate: [IsAuthenticatedGuard], component: AwardCreateComponent },
  { path: 'homeworks', canActivate: [IsAuthenticatedGuard], component: HomeworkListComponent },
  { path: 'prizes', canActivate: [IsAuthenticatedGuard], component: PrizeListComponent }
  // { path: '**', component: NotFound }
]