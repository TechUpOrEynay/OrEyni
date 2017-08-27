import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../../../models/customer.type';
import { CustomerProcess } from '../../../models/customer-process.type';
import { CustomerProcessType } from '../../../models/customer-processType.type'
import { CustomersService } from '../../../services/customers.service';
@Component({
    selector: 'app-customer-process',
    templateUrl: './customer-process.component.html',
    styleUrls: ['./customer-process.component.css']
})
export class CustomerProcessComponent implements OnInit {
    private _currentCustomer: Customer;
    processes: CustomerProcess[];
    processTypeTable: CustomerProcessType;
    constructor(private customersService: CustomersService, ) { }
    get currentCustomer() { return this._currentCustomer; }

    @Input()
    set currentCustomer(currentCustomer: Customer) {
        this._currentCustomer = currentCustomer;
    }
    ngOnInit() {
        this.customersService.getCustomerProcess(this._currentCustomer.CustomerId).then(x => {
            this.processes = x
        });
        this.customersService.getProcessTypeTable().then(x => { this.processTypeTable = x });
    }

}