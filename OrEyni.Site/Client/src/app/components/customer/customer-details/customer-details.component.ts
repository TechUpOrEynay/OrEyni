import { Component, Input, OnDestroy, ViewChild } from '@angular/core';
import { Customer } from '../../../models/customer.type';
import { CustomersService } from '../../../services/customers.service';
import { CustomerDetails } from '../../../models/customer-details.type';
import { MdDialog } from '@angular/material';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';
import { ActivatedRoute , Router} from '@angular/router'  
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {
  // @ViewChild('customerDetailsForm') form;
  private _currentCustomer: Customer;
  id:number;
  constructor(private customersService: CustomersService, private dialog: MdDialog , private router: Router ,private route: ActivatedRoute) {
   }


  // get currentCustomer() { return this._currentCustomer; }

  //@Input()
 // set currentCustomer(currentCustomer: Customer) {
   // if (!this.form ) {
     // this._currentCustomer = currentCustomer;
    //   if (this._currentCustomer.) {
    //     this.loadCustomerDetails();
    //   }
    // } else {
    //   this.saveBeforeLoad(currentCustomer);
    // }
 // }
 //ngDoCheck()
 ngOnInit() {
     this.route.params.subscribe(params => {
      this.id = params["currentCustomer"]; 
       if(this.id) 
      //     alert(this.id)   
          this.customersService.getCustomerById(this.id).then(x =>{
          this._currentCustomer=x;  }); 
       else    
        this._currentCustomer= new Customer();
    });
  }
}

  // private loadCustomerDetails() {
  //   // this.customerDetails = null;
  //   // this.customersService.getCustomerDetails(this._currentCustomer.id)
  //   //   .then(customerDetails => {
  //   //     this.customerDetails = customerDetails;
  //   //   });
  // }

  // private saveBeforeLoad(newCurrentCustomer: Customer) {
  //   this.saveWithAsk().then(() => {
  //     this._currentCustomer = newCurrentCustomer;
  //     this.loadCustomerDetails();
  //   }
  //   );
  // }

  // saveWithAsk() {
  //   return new Promise((resolve) => {
  //     if (this.form.dirty && this.form.valid) {
  //       const dialogRef = this.dialog.open(ConfirmDialogComponent
  //         , { data: { text: `האם לשמור את השינויים עבור לקוח ${this._currentCustomer.firstName}`, title: 'שמירה' } });
  //       dialogRef.afterClosed().subscribe(result => {
  //         if (result) {
  //           this.save();
  //         } else {
  //           this.resetForm();
  //         }
  //         resolve(true);
  //       });
  //     } else if (!this.form.valid) {
  //       this.resetForm();
  //       resolve(false);
  //     }
  //   });

  // }
  // private save() {
  //   if (this.form.valid && this.form.dirty) {
  //     console.log('save');
  //     this.form.resetForm();
  //     this.resetForm();
  //   }
  // }

  // private resetForm() {

  //   this.loadCustomerDetails();
  // }

