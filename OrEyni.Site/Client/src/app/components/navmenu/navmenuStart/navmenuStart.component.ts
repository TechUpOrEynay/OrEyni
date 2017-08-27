import { Component } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA } from '@angular/material';
import { DialogService } from "ng2-bootstrap-modal";
import { LoginComponent } from '../../dialogs/loginDialog/login.component'
import { Router } from '@angular/router'
@Component({
    selector: 'nav-menu-start',
    templateUrl: './navmenuStart.component.html',
    styleUrls: ['./navmenuStart.component.css']
})
export class NavmenuStartComponent {
    constructor(public dialog: MdDialog, private dialogService: DialogService, private router: Router) { }
    login() {
        let disposable = this.dialogService.addDialog(LoginComponent,
            { backdropColor: 'rgba(0, 0, 0, 0.5)' })
            .subscribe((isConfirmed) => {
                //We get dialog result
                if (isConfirmed) {
                    this.router.navigate(['/app'])
                }
                else {
                    alert("שם משתמש או סיסמא אינם נכונים")
                }
            });
    }
}
