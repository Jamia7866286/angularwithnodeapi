import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextOverviewComponent } from './pages/text-overview/text-overview.component';
import { TextAnalyticsExplorerComponent } from './pages/text-analytics-explorer/text-analytics-explorer.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './auth.guard';
import { SignupComponent } from './pages/signup/signup.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'overview', component: TextOverviewComponent, canActivate: [AuthGuard] },
  { path: 'explorer', component: TextAnalyticsExplorerComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
