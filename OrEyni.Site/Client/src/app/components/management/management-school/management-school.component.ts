import { Component, OnInit } from '@angular/core';
import { ManagementProblem } from '../../../models/management.problem.type'
import { ManagementSchool } from '../../../models/management.school.type'
import { ManagementUsers } from '../../../models/management.users.type'
import { ManagementService } from '../../../services/management.service';
import { DialogService } from "ng2-bootstrap-modal";
import { City } from '../../../models/city.type'
import { SuccessDialogComponent } from '../../../shared/components/success-dialog/success-dialog.component';
@Component({
    selector: 'managementSchool',
    templateUrl: './management-school.component.html',
    styleUrls: ['./management-school.component.css']
})
export class ManagementSchoolComponent {
    school: ManagementSchool;
    cities: City[];
    constructor(private managmentService: ManagementService ,private dialogService:DialogService ) { }
    ngOnInit() {
        this.school = new ManagementSchool();
        this.managmentService.getCities().then(x => { this.cities = x; })
    }
    save() {
        this.managmentService.addSchool(this.school).then(x => {
            if(x)
            {  let disposable = this.dialogService.addDialog(SuccessDialogComponent, {
               data: 'מוסד הלימודים התווסף בהצלחה למסד הנתונים'},
               { backdropColor: 'rgba(0, 0, 0, 0.5)' })
               this.school = new ManagementSchool();
            }
        })
    }
    cancel(){
        this.school = new ManagementSchool();
    }
}