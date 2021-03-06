
// import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
// import { MdDialog, MdDialogRef } from '@angular/material';
// import { DonorsService } from '../../../services/donors.service';
// import { Donor } from '../../../models/donor.type';
// import { MD_DIALOG_DATA } from '@angular/material';
// @Component({
//     selector: 'donors-addDialog',
//     templateUrl: 'donors.component.addDialog.html',
//     styleUrls: ['./donors.component.addDialog.css']
// })
// export class AddDialogComponent implements OnInit {

//     donor: Donor;

//     constructor(private donorService: DonorsService, public dialogRef: MdDialogRef<AddDialogComponent>) { }
//     ngOnInit() {
//         this.donor = new Donor();
//     }
// }
import { Component } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { DonorsService } from '../../../services/donors.service';
import { Donor } from '../../../models/donor.type';

@Component({
    selector: 'donors-addDialog',
    templateUrl: 'donors.component.addDialog.html',
    styleUrls: ['donors.component.addDialog.css'],
})
export class AddDialogComponent extends DialogComponent<null, boolean> {
    donor: Donor;
    constructor(dialogService: DialogService, private donorService: DonorsService) {
        super(dialogService);
    }
    ngOnInit() {
        this.donor = new Donor();
        //this.donorService.getDonorById(this.donor.id).then(x => { this.donor = x });
    }
    confirm() {
        this.close();
        this.donorService.createNewDonor(this.donor).subscribe(x => {
            if (x == true)
                this.result = true;
            this.result = false;
        });
    }
    cancel() {
        this.close();
    }
}