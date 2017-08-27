import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Donor } from '../../models/donor.type';
import { DonorsService } from '../../services/donors.service';
import { FormControl } from '@angular/forms';
import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA } from '@angular/material';
import { EditDialogComponent } from '../dialogs/editDialog/donors.component.editDialog';
import { AddDialogComponent } from '../dialogs/addDialog/donors.component.addDialog';
import { DialogService } from "ng2-bootstrap-modal";
@Component({
    selector: 'donors',
    templateUrl: './donors.component.html',
    styleUrls: ['./donors.component.css']
})
export class DonorsComponent implements OnInit {
    donorCtrl: FormControl;
    filteredDonors: any;
    public selectedDonor: Donor;
    donors: Donor[];
    // config: MdDialogConfig = {
    //     disableClose: false,
    //     hasBackdrop: true,
    //     backdropClass: '',
    //     width: '28%',
    //     height: '80%',
    //     position: {
    //         top: '',
    //         bottom: '',
    //         left: '',
    //         right: ''
    //     },
    //     data: {
    //         data: this.selectedDonor
    // }
    // };
    @ViewChild(TemplateRef) template: TemplateRef<any>;
    constructor(private donorsService: DonorsService, public dialog: MdDialog, private dialogService: DialogService) { }
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
        return val && this.donors ? this.donors.filter(d => d.fullName.toLowerCase().indexOf(val.toLowerCase ? val.toLowerCase() : val.fullName.toLowerCase()) === 0)
            : this.donors;
    }
    showEditDialog() {
        let disposable = this.dialogService.addDialog(EditDialogComponent, {
            donor: this.selectedDonor,
        }, { backdropColor: 'rgba(0, 0, 0, 0.5)' })
            .subscribe((isConfirmed) => {
                //We get dialog result
                if (isConfirmed) {
                }
                else {
                }
            });
    }
    showAddDialog() {
        let disposable = this.dialogService.addDialog(AddDialogComponent
            , { backdropColor: 'rgba(0, 0, 0, 0.5)' })
            .subscribe((isConfirmed) => {
                //We get dialog result
                if (isConfirmed) {
                }
                else {
                }
            });
    }
    deleteDonor() {
        this.donorsService.deleteDonor(this.selectedDonor.id)
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

