import { Component, OnInit } from '@angular/core';
import { ManagementProblem } from '../../models/management.problem.type'
import { ManagementSchool } from '../../models/management.school.type'
import { ManagementUsers } from '../../models/management.users.type'
import { ManagementService } from '../../services/management.service';

import { City } from '../../models/city.type'
@Component({
    selector: 'management',
    templateUrl: './management.component.html',
    styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
    isSchool: boolean = false;
    isProblem: boolean = false;
    isUsers: boolean = false;
    school: ManagementSchool;
    problem: ManagementProblem;
    user: ManagementUsers;
    cities: City[];
    constructor(private managmentService: ManagementService) { }
    ngOnInit() {
        // this.managmentService.getCities().then(x => { this.cities = x; })
    }
}