import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../../../models/customer.type';

@Component({
  selector: 'app-customer-activities',
  templateUrl: './customer-activities.component.html',
  styleUrls: ['./customer-activities.component.css']
})
export class CustomerActivitiesComponent implements OnInit {
  private _currentCustomer: Customer;
  constructor() { }
  get currentCustomer() { return this._currentCustomer; }

  @Input()
  set currentCustomer(currentCustomer: Customer) {
    this._currentCustomer = currentCustomer;
  }
  ngOnInit() {
  }

}
