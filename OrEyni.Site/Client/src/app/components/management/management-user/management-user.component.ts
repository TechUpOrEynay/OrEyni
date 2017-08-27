import { Component, OnInit } from '@angular/core';
import { ManagementUsers } from '../../../models/management.users.type'
import { ManagementService } from '../../../services/management.service';
@Component({
    selector: 'managementUser',
    templateUrl: './management-user.component.html',
    styleUrls: ['./management-user.component.css']
})
export class ManagementUserComponent {
    user: ManagementUsers;
    constructor(private managmentService: ManagementService) { }
    save() {
        this.managmentService.addUser(this.user)
    }

}