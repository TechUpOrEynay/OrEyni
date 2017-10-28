import { Component, OnInit } from '@angular/core';
import { ManagementProblem } from '../../../models/management.problem.type'
import { ManagementService } from '../../../services/management.service';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { SuccessDialogComponent } from '../../../shared/components/success-dialog/success-dialog.component';
@Component({
    selector: 'managementProblem',
    templateUrl: './management-problem.component.html',
    styleUrls: ['./management-problem.component.css']
})
export class ManagementProblemComponent {
    problem: ManagementProblem
    constructor(private managmentService: ManagementService , private dialogService:DialogService) {this.problem = new ManagementProblem(); }
    save() {
        this.managmentService.addProblem(this.problem).then(x => {
            if (x)
                {  let disposable = this.dialogService.addDialog(SuccessDialogComponent, {
                    data: 'סוג הליקוי התווסף בהצלחה למסד הנתונים'},
                    { backdropColor: 'rgba(0, 0, 0, 0.5)' })
                    this.problem = new ManagementProblem();
                 }
        })
    }
    cancel(){
        this.problem = new ManagementProblem();
    }
}