import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { HelloWorldComponent } from './components/helloworld/helloworld.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { WeatherComponent } from './components/weather/weather.component';
import { ContactsService } from './services/contacts.service';
import { CustomersService } from './services/customers.service';
import { DonorsService } from './services/donors.service';
import { ManagementService } from './services/management.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
} from '@angular/material';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { TabsModule } from 'ng2-tabs'
import { CustomersComponent } from './components/customers/customers.component';
import { CustomerComponent } from './components/customer/customer/customer.component';
import { CustomerDetailsComponent } from './components/customer/customer-details/customer-details.component';
import { CustomerActivitiesComponent } from './components/customer/customer-activities/customer-activities.component';
import { DonorsComponent } from './components/donors/donors.component';
import { DonationComponent } from './components/donation/donation.component';
import { EditDialogComponent } from './components/dialogs/editDialog/donors.component.editDialog';
import { AddDialogComponent } from './components/dialogs/addDialog/donors.component.addDialog';
import { CustomerProcessComponent } from './components/customer/customer-process/customer-process.component';
import { ConfirmDialogComponent } from './shared/components/confirm-dialog/confirm-dialog.component';
import { ManagementComponent } from './components/management/management.component'
import { ManagementUserComponent } from './components/management/management-user/management-user.component';
//import { ManagementProblemComponent } from './components/management/management-problem/management-problem.component';
import { ManagementSchoolComponent } from './components/management/management-school/management-school.component';
import { ManagementProblemComponent } from './components/management/management-problem/management-problem.component';
import { AppStartComponent } from './components/app/appStart/appStart.component';
import { LoginComponent } from './components/dialogs/loginDialog/login.component';
import { NavmenuStartComponent } from './components/navmenu/navmenuStart/navmenuStart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    HelloWorldComponent,
    FetchDataComponent,
    CounterComponent,
    WeatherComponent,
    CustomersComponent,
    CustomerComponent,
    CustomerDetailsComponent,
    CustomerActivitiesComponent,
    CustomerProcessComponent,
    ConfirmDialogComponent,
    DonorsComponent,
    DonationComponent,
    ManagementComponent,
    ManagementUserComponent,
    ManagementSchoolComponent,
    ManagementProblemComponent,
    AppStartComponent,
    EditDialogComponent,
    AddDialogComponent,
    LoginComponent,
    NavmenuStartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    BootstrapModalModule,
    TabsModule,
    ReactiveFormsModule
  ],
  providers: [ContactsService, CustomersService, DonorsService, ManagementService],
  entryComponents: [ConfirmDialogComponent, EditDialogComponent, AddDialogComponent], //components that dynamic created  in code
  bootstrap: [AppComponent]
})
export class AppModule { }
