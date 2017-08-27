import { Component, OnInit } from '@angular/core';
import { ManagementProblem } from '../../../models/management.problem.type'
import { ManagementSchool } from '../../../models/management.school.type'
import { ManagementUsers } from '../../../models/management.users.type'
import { ManagementService } from '../../../services/management.service';
import { City } from '../../../models/city.type'
@Component({
    selector: 'managementSchool',
    templateUrl: './management-school.component.html',
    styleUrls: ['./management-school.component.css']
})
export class ManagementSchoolComponent {
    school: ManagementSchool;
    cities: City[];
    constructor(private managmentService: ManagementService) { }
    ngOnInit() {
        this.managmentService.getCities().then(x => { this.cities = x; })
    }
    save() {
        this.managmentService.addSchool(this.school)
    }
}