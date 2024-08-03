import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { AuthenticationGuard } from './authentication.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import { NotifyGuard } from './notify.guard';
import { ParentComponent } from './parent/parent.component';
import { Calculator2Component } from './calculator2/calculator2.component';
import { AboutCompanyComponent } from './about-us/about-company/about-company.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'dashboard', canActivate:[AuthenticationGuard], component: DashboardComponent, children:[
    {path:'welcome', component:WelcomeComponent},
    {path:'home', component:HomeComponent},
    {path:'data-binding', component: DataBindingComponent},
    {path:'calculator-one', component:CalculatorComponent},
    {path:'directives', component:DirectivesComponent},
    {path:'pipes', component:PipesComponent},
    {path:'flipkart-two', component:FlipkartComponent},
    {path:'vehicle', component:VehicleComponent},
    {path:'create-vehicle', component:CreateVehicleComponent},
    {path:'vehicle-details/:id', component: VehicleDetailsComponent},
    {path:'edit-vehicle/:id', component: CreateVehicleComponent},
    {path:'create-user', canDeactivate:[NotifyGuard], component:CreateUserComponent},
    {path:'parent', component: ParentComponent},
    {path:'calculator2', component: Calculator2Component},
    {path:'about-company', component: AboutCompanyComponent},
    {path:'two-person-path'},
    {path:'one-user-path'},
    {
      path: 'payments',
      loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule)
    }

  ]},
  {path:'', component:LoginComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
