import { Component, OnInit } from '@angular/core';
import { ManagementProblem } from '../../../models/management.problem.type'
import { ManagementService } from '../../../services/management.service';
@Component({
    selector: 'managementProblem',
    templateUrl: './management-problem.component.html',
    styleUrls: ['./management-problem.component.css']
})
export class ManagementProblemComponent {
    problem: ManagementProblem
    constructor(private managmentService: ManagementService) { }
    save() {
        this.managmentService.addProblem(this.problem)
    }
}