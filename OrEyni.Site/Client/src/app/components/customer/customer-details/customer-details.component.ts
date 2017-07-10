import { Component,Input } from '@angular/core';
import {Customer } from '../../../models/customer.type';
import {CustomersService} from '../../../services/customers.service';
import {CustomerDetails } from '../../../models/customer-details.type';
import {MdDialog} from '@angular/material';
import {ConfirmDialogComponent} from '../../../shared/components/confirm-dialog/confirm-dialog.component';
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {
private _currentCustomer: Customer;
public isDirty: boolean;
private customerDetails: CustomerDetails;
constructor(private customersService: CustomersService, private dialog: MdDialog) { }


get currentCustomer(){ return this._currentCustomer; }

@Input()
set currentCustomer(currentCustomer: Customer)
{
  if(!this.isDirty){
    this._currentCustomer = currentCustomer;
    if (this._currentCustomer) {
      this.loadCustomerDetails();
    }
  } else {
      this.saveDateBeforeLoad(currentCustomer);
      this.isDirty = false;
  }

}



loadCustomerDetails()
{
  this.customerDetails=null;
  this.customersService.getCustomerDetails(this._currentCustomer.CustomerId)
  .then(customerDetails => {
    this.customerDetails = customerDetails;
  });
}
 
saveDateBeforeLoad(newCurrentCustomer:Customer) {
  let dialogRef= this.dialog.open(ConfirmDialogComponent
  , {data: {text: `האם לשמור את השינויים עבור לקוח ${this._currentCustomer.FullName}`, title: 'שמירה'}});
  dialogRef.afterClosed().subscribe(result => {
    if(result)
    {
      //save
    }
    this._currentCustomer = newCurrentCustomer;
    this.loadCustomerDetails(); 
});
}
}
