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
   customers :Customer[];
  
  
   getCustomers() 
   {
    return this.http.get(`http://localhost:4222/api/customers/getcustomers`)
      .map(response => response.json() as Customer[])
          .toPromise().catch(e=>{alert("error")})
  }
  getCustomerById(id:number) 
  {
   return this.http.get(`http://localhost:4222/api/customers/getCustomerById/${id}`)
     .map(response => response.json() as Customer)
         .toPromise();
 }
  //  getCustomerDetails(id: number) {
  //    return this.http.get(`http://localhost:4222/api/customers/getcustomerdetails/${id}`)
  //      .map(response => response.json()   as CustomerDetails)
  //      .toPromise();
  //  }
     getCustomerProcess(id: number) {
       return this.http.get(`http://localhost:4222/api/customers/getCustomerProcess/${id}`)
     .map(response => response.json() as CustomerProcess[])
         .toPromise();
     }

      getProcessTypeTable() {
     return this.http.get(`http://localhost:4222/api/customers/getProcessTypeTable`)
          .map(response => response.json() as CustomerProcessType[])
       .toPromise();
   }
   getParentsNameByFamilyId(id : number){
    return this.http.get(`http://localhost:4222/api/customers/getParentsNameByFamilyId/${id}`)
    .map(response => response.json() as any[])
        .toPromise();
   }
   addProcess(process :CustomerProcess){
    return this.http.post(`http://localhost:4222/api/customers/addProcess`,process)
    .map(response => response.json() as number)
        .toPromise();
   }

}

