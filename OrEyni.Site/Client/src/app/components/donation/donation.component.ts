import { Component, OnInit, Input } from '@angular/core';
import { DonorsService } from '../../services/donors.service';
import { Donor } from '../../models/donor.type';
import { Donation } from '../../models/donation.type';
import { DonorContact } from '../../models/donorContact.type';
import { MdTabsModule } from '@angular/material';
import { TabsModule } from "ng2-tabs";
@Component({
    selector: 'donation',
    templateUrl: './donation.component.html',
    styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {
    donors: Donor[];
    donations: Donation[];
    donorContacts: DonorContact[];
    donation: Donation;
    donorContact: DonorContact;
    @Input()
    currentDonor: Donor

    constructor(private donorsService: DonorsService) { }

    ngOnInit() {
        this.donorsService.getDonation(this.currentDonor).then(x => {
            this.donations = x
        });
        this.donorsService.getDonorContact(this.currentDonor).then(x => {
            this.donorContacts = x
        });
        this.donation = new Donation();
        this.donorContact = new DonorContact();
    }
}
