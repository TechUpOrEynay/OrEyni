import { Component, Input, ViewChild } from '@angular/core';
import { Customer } from '../../../models/customer.type';
import { CustomersService } from '../../../services/customers.service';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { TabsModule } from "ng2-tabs";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  @ViewChild(CustomerDetailsComponent)
  private customerDetailsComponent: CustomerDetailsComponent;

  private _currentCustomer: Customer;

  public selectedCustomer: Customer;

  constructor(private customersService: CustomersService) { }


  get currentCustomer() { return this._currentCustomer; }

  @Input()
  set currentCustomer(currentCustomer: Customer) {
    this._currentCustomer = currentCustomer;
    if (this._currentCustomer && this._currentCustomer.id) {
      this.selectedCustomer = this._currentCustomer;
    }
  }



  // tabChanged(event) {
  //   this.customerDetailsComponent.saveWithAsk();
  // }

}
