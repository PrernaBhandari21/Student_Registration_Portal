import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { SidemenuComponent } from './shared/sidemenu/sidemenu.component';

import { NgMaterialMultilevelMenuModule, MultilevelMenuService } from 'ng-material-multilevel-menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthComponent } from './shared/auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './shared/login/login.component';
import { CreateExamComponent } from './admin/create-exam/create-exam.component';
import { UpdateExistingExamComponent } from './admin/update-existing-exam/update-existing-exam.component';
import { MatNativeDateModule } from '@angular/material/core'; 
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidemenuComponent,
    DashboardComponent,
    LandingPageComponent,
    AuthComponent,
    LoginComponent,
    CreateExamComponent,
    UpdateExistingExamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgMaterialMultilevelMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule
    
  ],
  providers: [MultilevelMenuService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule { }
