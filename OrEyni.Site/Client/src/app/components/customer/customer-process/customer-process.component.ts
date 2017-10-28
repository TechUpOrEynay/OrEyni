import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../../../models/customer.type';
import { CustomerProcess } from '../../../models/customer-process.type';
import { CustomerProcessType } from '../../../models/customer-processType.type';
import { Parent } from '../../../models/parent.type';
import { CustomersService } from '../../../services/customers.service';
import { ActivatedRoute, Router } from '@angular/router'
import * as moment from 'moment';
@Component({
    selector: 'app-customer-process',
    templateUrl: './customer-process.component.html',
    styleUrls: ['./customer-process.component.css']
})
export class CustomerProcessComponent implements OnInit {
    private _currentCustomer: Customer;
    processes: CustomerProcess[];
    processTypeTable: CustomerProcessType[] = [];
    parents: Parent[];
    d: Date;
    id: number;
    today: Date;
    newProcess = new CustomerProcess();
    constructor(private customersService: CustomersService, private route: ActivatedRoute, private router: Router) { }
    // get currentCustomer() { return this._currentCustomer }

    // @Input()
    // set currentCustomer(currentCustomer: Customer) {
    //     this._currentCustomer = currentCustomer;  
    //     if(this._currentCustomer)
    //     this.loadProcess();
    // }
    ngOnInit() {

        //    this.route.params
        //             .switchMap((x: Params) => this.heroService.getHero(+x["id"]))
        //             .subscribe(x => this.myHero = x);

        this.route.params.subscribe(params => {
            this.id = params["currentCustomer"];
            if (this.id)
                this.customersService.getCustomerById(this.id).then(x => {
                    this._currentCustomer = x;
                    this.loadProcess();
                })
        });
    }
    private loadProcess() {
        this.today = moment().toDate();
        this.newProcess.date = this.today;
        this.customersService.getCustomerProcess(this._currentCustomer.id).then(x => {
            this.processes = x;
            this.processes.forEach(x => x.date == moment(x.date).toDate());
            this.customersService.getParentsNameByFamilyId(this._currentCustomer.familyChildID)
                .then(x => {
                    this.parents = x;
                    if (this.processes) {
                        this.processes.forEach(proc => {
                            var parent = this.parents.find(parent => parent.id == proc.parentID);
                            if (parent)
                            { proc.parentName = parent.firstName }
                        });
                    }
                });
            this.customersService.getProcessTypeTable().then(x => {
                this.processTypeTable = x;
                this.processes.forEach(proc => {
                    var proType = this.processTypeTable.find(t => t.id == proc.processTypeID);
                    if (proType)
                    { proc.processTypeName = proType.description }
                });
            });
        });
    }

    save() {
        this.newProcess.childID = this._currentCustomer.id;
        this.customersService.addProcess(this.newProcess).then(x => {
            if (x) {
                this.newProcess.ID = x
                this.newProcess.parentName = this.parents.find(parent => parent.id == this.newProcess.parentID).firstName;
                this.newProcess.processTypeName = this.processTypeTable.find(t => t.id == this.newProcess.processTypeID).description;
                this.processes.push(this.newProcess);
                this.newProcess = new CustomerProcess();
            }
        });
    }
    cancel() {
        this.newProcess = new CustomerProcess();
    }

}
