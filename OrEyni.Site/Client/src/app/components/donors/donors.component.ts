import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Donor } from '../../models/donor.type';
import { DonorsService } from '../../services/donors.service';
import { FormControl } from '@angular/forms';
import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA } from '@angular/material';
import { EditDialogComponent } from '../dialogs/editDialog/donors.component.editDialog';
import { AddDialogComponent } from '../dialogs/addDialog/donors.component.addDialog';
import { DialogService } from "ng2-bootstrap-modal";
import {DonationComponent} from '../donation/donation.component';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
@Component({
    selector: 'donors',
    templateUrl: './donors.component.html',
    styleUrls: ['./donors.component.css']
})
export class DonorsComponent implements OnInit {
    donorCtrl: FormControl;
    filteredDonors: any;
    public selectedDonor: Donor;
    donors: Donor[]=[];

    @ViewChild(DonationComponent) donationComponent: DonationComponent;


    constructor(private donorsService: DonorsService, public dialog: MdDialog, private dialogService: DialogService) {
        this.selectedDonor = new Donor;
     }
   
    ngOnInit() {
        this.donorCtrl = new FormControl();
        this.donorsService.getDonors().then(x => {
            this.donors = x
            this.donors.forEach(y => { y.fullName = y.firstName + " " + y.lastName });
            this.filteredDonors = this.donorCtrl.valueChanges
                .startWith(null)
                .map(name => this.filter(name));
        });
    }

    filter(val: any) {
        return val && this.donors ? this.donors.filter(d => d.fullName.indexOf(val ? val : val.fullName) === 0)
            : this.donors;
    }
     displayDonor(donor: Donor): string {
        return donor ? donor.fullName : null;
      }
    showEditDialog() {
        let disposable = this.dialogService.addDialog(EditDialogComponent, {
            donor: this.selectedDonor,
        }, { backdropColor: 'rgba(0, 0, 0, 0.5)' })
            .subscribe((result) => {
                //We get dialog result
                if (result) {
                    this.donorsService.updateDonorDetailes(result).then(x => {
                        if (x){
                            var fromdb = this.donors.find(x => x.id == result.id);
                            fromdb.fullName = result.firstName+" "+result.lastName;
                            this.displayDonor(fromdb);
                            this.selectedDonor = result;
                        } 
                     });          
                }
            });
    }
    showAddDialog() { 
        let disposable = this.dialogService.addDialog(AddDialogComponent
            , { backdropColor: 'rgba(0, 0, 0, 0.5)' })
            .subscribe((result) => {
                //We get dialog result
                if (result) {
                    this.donorsService.createNewDonor(result).then(x =>{
                        if(x)
                            result.fullName = result.firstName+" "+result.lastName;
                            result.id = x;
                            this.donors.push(result);
                            this.selectedDonor = result;
                    })
                }
                else {
                }
            });
    }
    deleteDonor() {
        this.donorsService.deleteDonor(this.selectedDonor.id).then(x =>{
            if(x)
                this.donors.splice(this.donors.indexOf(this.selectedDonor) ,1)
        })
    }
    saveDonations(){
     this.donationComponent.save();

    }
    cancel(){
     this.donationComponent.cancel();
    }
}




    // openDialogEdit(key) {
    //     let dialogRef = this.dialog.open(EditDialogComponent, this.config)
    //     dialogRef.afterClosed().subscribe((result: string) => {
    //         dialogRef = null;

    //     })
    // }
    // openDialogAdd(key) {
    //     let dialogRef = this.dialog.open(AddDialogComponent, this.config)
    //     dialogRef.afterClosed().subscribe((result: string) => {
    //         dialogRef = null;

    //     })
    //  close(event) {
    //    if (event == true)
    //       this.dialog.closeAll();
    // }

