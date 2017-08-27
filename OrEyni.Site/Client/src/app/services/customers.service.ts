import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Customer } from '../models/customer.type';
import { CustomerDetails } from '../models/customer-details.type';
import { CustomerProcess } from '../models/customer-process.type';
import { CustomerProcessType } from '../models/customer-processType.type';

@Injectable()
export class CustomersService {

  constructor(private http: Http) { }

  getCustomers() {
    return this.http.get(`http://localhost:4222/api/Customers`)
      .map(response => response.json() as Customer[])
      .toPromise();
  }

  getCustomerDetails(id: number) {
    return this.http.get(`http://localhost:4222/api/Customers/GetCustomerDetails/${id}`)
      .map(response => response.json() as CustomerDetails)
      .toPromise();
  }
  getCustomerProcess(id: number) {
    return this.http.get(`http://localhost:4222/api/Customers/getCustomerProcess/${id}`)
      .map(response => response.json() as CustomerProcess[])
      .toPromise();
  }

  getProcessTypeTable() {
    return this.http.get(`http://localhost:4222/api/Customers/getProcessTypeTable`)
      .map(response => response.json() as CustomerProcessType)
      .toPromise();
  }
}

