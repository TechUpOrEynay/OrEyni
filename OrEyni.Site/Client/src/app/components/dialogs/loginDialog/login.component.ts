import { Component } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { UserService } from '../../../services/user.service'
import { User } from '../../../models/user.type'
@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css'],
})
export class LoginComponent extends DialogComponent<null, boolean> {
    user: User;
    constructor(dialogService: DialogService, private userService: UserService, ) {
        super(dialogService);
    }
    confirm() {
        // on click on confirm button we set dialog result as true,
        // ten we can get dialog result from caller code
        this.close();
        this.userService.login(this.user).then(x => {
            if (x)
                this.result = true;
            this.result = false;
        });
    }
}