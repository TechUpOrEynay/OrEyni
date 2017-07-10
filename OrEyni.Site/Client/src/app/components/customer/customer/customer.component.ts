import { Component,  Input } from '@angular/core';
import {Customer } from '../../../models/customer.type';
import {CustomersService} from '../../../services/customers.service';



@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent  {
  private _currentCustomer: Customer;

public  selectedCustomer: Customer;

constructor(private customersService: CustomersService) { }


get currentCustomer(){ return this._currentCustomer; }

@Input()
set currentCustomer(currentCustomer: Customer)
{
  this._currentCustomer = currentCustomer;
  if (this._currentCustomer && this._currentCustomer.CustomerId) {
    this.selectedCustomer = this._currentCustomer;
  }
}

}
