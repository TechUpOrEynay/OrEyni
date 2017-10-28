import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.type'
import { ManagementService } from '../../../services/management.service';
// import { MdDialog } from '@angular/material';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { SuccessDialogComponent } from '../../../shared/components/success-dialog/success-dialog.component';

@Component({
    selector: 'managementUser',
    templateUrl: './management-user.component.html',
    styleUrls: ['./management-user.component.css']
})
export class ManagementUserComponent {
    user:User;
    constructor(private managmentService: ManagementService ,private dialogService:DialogService ) { 
        this.user = new User();
    }

    save() {
        this.managmentService.addUser(this.user).then(x =>{
            if (x) { 
                // const dialogRef = this.dialog.open(SuccessDialogComponent,
                // { data: { text: 'שם המשתמש התווסף למערכת בהצלחה' } });
                // dialogRef.afterClosed().subscribe(result => {
                //          var u = 1;})
                let disposable = this.dialogService.addDialog(SuccessDialogComponent, {
                     data: 'שם המשתמש התווסף בהצלחה למערכת',
                }, { backdropColor: 'rgba(0, 0, 0, 0.5)' })
                this.user = new User();
            }
        });
    }
    cancel(){
        this.user = new User();
    }

}
