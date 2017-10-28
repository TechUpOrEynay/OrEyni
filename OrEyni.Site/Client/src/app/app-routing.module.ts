import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HelloWorldComponent } from './components/helloworld/helloworld.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { WeatherComponent } from './components/weather/weather.component';
import { ContactsService } from './services/contacts.service';
import { CustomersComponent } from './components/customers/customers.component';
import { DonationComponent } from './components/donation/donation.component';
import { DonorsComponent } from './components/donors/donors.component';
import { ManagementComponent } from './components/management/management.component';
import { CustomerProcessComponent } from './components/customer/customer-process/customer-process.component';
import { CustomerDetailsComponent } from './components/customer/customer-details/customer-details.component';
import { ManagementUserComponent } from './components/management/management-user/management-user.component';
import { ManagementProblemComponent } from './components/management/management-problem/management-problem.component';
import { ManagementSchoolComponent } from './components/management/management-school/management-school.component';
import { AppComponent } from './components/app/app.component'
//import { AppForUserComponent } from './components/app/appForUser/appForUser.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { NavmenuStartComponent } from './components/navmenu/navmenuStart/navmenuStart.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'hello', component: HelloWorldComponent },
  //{ path: 'management', component: ManagementComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'fetch-data', component: FetchDataComponent },
  { path: 'customers', component: CustomersComponent ,
  children: [
    { path: 'details/:currentCustomer', component: CustomerDetailsComponent },
    { path: 'process/:currentCustomer', component: CustomerProcessComponent },
  ]},
  { path: 'donors', component: DonorsComponent },
  { path: 'managementOrEnay', component: ManagementComponent ,
  children: [
    { path: 'problem', component: ManagementProblemComponent },
    { path: 'user', component: ManagementUserComponent },
    { path: 'school', component: ManagementSchoolComponent },
  ]
},
  { path: 'app-root', component: AppComponent },
  { path: 'nav-menu', component: NavMenuComponent },
  { path: 'nav-menu-start', component: NavmenuStartComponent },
  { path: '**', redirectTo: '/' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
