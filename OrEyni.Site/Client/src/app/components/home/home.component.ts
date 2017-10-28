import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact.type';
import { FormControl } from '@angular/forms';
import { ContactsService } from '../../services/contacts.service';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    //private contacts: Contact[] = [];
    contactCtrl: FormControl;
    filteredContacts: any;
    public selectedContact: Contact;
    contacts: Contact[] = [
        {
            firstName: 'Arkansas',
            fullName: 'vsdfe',


        },
        {
            firstName: 'fhfhfh',
            fullName: 'vsweqeqdfe'
        },
        {
            firstName: 'yyyyyyyy',
            fullName: 'nnnnnnnn'
        },
        {
            firstName: 'ddddddd',
            fullName: 'vsdfe'
        }
    ];

    constructor(private contactsService: ContactsService) { }

    ngOnInit() {
        this.contactCtrl = new FormControl();
        // this.contactsService.getContacts().then(contacts => {
        //   this.contacts = contacts;
        //this.contacts.forEach(y => { y.fullName = y.firstName + " " + y.lastName });
        this.filteredContacts = this.contactCtrl.valueChanges
            .startWith(null)
            .map(name => this.filter(name));
        // });
    }
    filter(val: any) {
        return val && this.contacts ? this.contacts.filter(c => c.fullName.indexOf(val ? val : val.fullName) === 0)
            : this.contacts;
    }
    displayContact(contact: Contact): string {
        return contact ? contact.fullName : null;
    }
}