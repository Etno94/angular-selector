import { Routes } from '@angular/router';
import { LayoutComponent } from './views/layout/layout.component';
import { HomeComponent } from './views/pages/home/home.component';
import { LoginComponent } from './views/pages/login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: HomeComponent,
    //canActivate: [AuthGuard] // Here we would use an AuthGuard to protect the route
  },
  { path: '**', redirectTo: 'login' }
];