import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import {NavMenuComponent} from './components/navmenu/navmenu.component';
import {HomeComponent} from './components/home/home.component';
import {HelloWorldComponent} from './components/helloworld/helloworld.component';
import {FetchDataComponent} from './components/fetchdata/fetchdata.component';
import {CounterComponent} from './components/counter/counter.component';
import {WeatherComponent} from './components/weather/weather.component';
import {ContactsService } from './services/contacts.service';
import {CustomersService} from './services/customers.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
import { CustomersComponent } from './components/customers/customers.component';
import { CustomerComponent } from './components/customer/customer/customer.component';
import { CustomerDetailsComponent } from './components/customer/customer-details/customer-details.component';
import { CustomerActivitiesComponent } from './components/customer/customer-activities/customer-activities.component';
import { ConfirmDialogComponent } from './shared/components/confirm-dialog/confirm-dialog.component';
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
    ConfirmDialogComponent
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
    ReactiveFormsModule
  ],
  providers: [ContactsService, CustomersService],
  entryComponents: [ConfirmDialogComponent], //components that dynamic created  in code
  bootstrap: [AppComponent]
})
export class AppModule { }
