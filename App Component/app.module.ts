import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EmployeesComponent } from './employees/employees.component';
import { AddemployeesComponent } from './addemployees/addemployees.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component'

const routes:Routes=[
  {path:" ",component:AppComponent},
  {path:"home",component:HomepageComponent},
  {path:"login",component:AdminLoginComponent},
  {path:"changepassword",component:ChangePasswordComponent},
  {path:"employees",component:EmployeesComponent},
  {path:"addemployee",component:AddemployeesComponent},
  { path: 'view/:id', component: ViewEmployeeComponent } // Define a route with a parameter ':id'



  ]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AdminLoginComponent,
    ChangePasswordComponent,
    EmployeesComponent,
    AddemployeesComponent,
    ViewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
