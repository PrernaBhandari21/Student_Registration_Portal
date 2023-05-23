import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthComponent } from './shared/auth/auth.component';
import { LoginComponent } from './shared/login/login.component';
import { CreateExamComponent } from './admin/create-exam/create-exam.component';

const routes: Routes = [
  {
    path:"admin-dashboard",
    component:DashboardComponent
  },
  {
    path:"landing-page" || "",
    component:LandingPageComponent,
    data: {
      showSideMenu: false
    }
  },
  {
    path:"auth",
    component:AuthComponent,
    data: {
      showSideMenu: false
    }
  },
  {
    path:"login",
    component:LoginComponent,
    data: {
      showSideMenu: false
    }
  },
  {
    path:"create-exam",
    component:CreateExamComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
