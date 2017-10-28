import { Component, OnInit } from '@angular/core';
import {Customer } from '../../models/customer.type';
import {FormControl} from '@angular/forms';
import {CustomersService} from '../../services/customers.service';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

private  customers: Customer[] = [];
    customerCtrl: FormControl;
    filteredCustomers: any;
    public  selectedCustomer: Customer;
    constructor(private customersService: CustomersService) {}

    ngOnInit(){  
     this.customerCtrl = new FormControl();
     this.customersService.getCustomers().then(customers => {
       if(customers)
      this.customers = customers;
       this.customers.forEach(y => { y.fullName = y.firstName + " " + y.lastName });
       this.filteredCustomers = this.customerCtrl.valueChanges
        .startWith(null)
        .map(name => this.filter(name));
    });
  }
    filter(val: any) {
    return val && this.customers ? this.customers.filter(c => c.fullName.indexOf(val?val:val.fullName) === 0)
               : this.customers;
    }
    displayCustomer(customer: Customer): string {
      return customer ? customer.fullName : null;
    }
  }


