import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import {Customer } from '../models/customer.type';
import {CustomerDetails } from '../models/customer-details.type';



@Injectable()
export class CustomersService {

  constructor(private http: Http) { }

getCustomers()
{
        return this.http.get(`http://localhost:4222/api/Customers`) 
            .map(response => response.json() as Customer[])
            .toPromise();
    }

  getCustomerDetails(id: number) {
        return this.http.get(`http://localhost:4222/api/Customers/GetCustomerDetails/${id}`) 
            .map(response => response.json() as CustomerDetails)
            .toPromise();
    }

}
