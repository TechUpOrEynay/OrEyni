import { Component, OnInit, Input } from '@angular/core';
import { DonorsService } from '../../services/donors.service';
import { Donor } from '../../models/donor.type';
import { Donation } from '../../models/donation.type';
import { DonorContact } from '../../models/donorContact.type';
import { MdTabsModule } from '@angular/material';
import { TabsModule } from "ng2-tabs";
import * as moment from 'moment';
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
    _currentDonor:Donor;
    selectedDonor:Donor;
    listIndex: number[] = new Array();
    dirty:boolean;
    index:number = 0;
    isThank = [{str :"נשלח" , value: true},
               {str :"לא נשלח" , value: false}] 

    get currentCustomer() { return this.selectedDonor; }
    @Input()
    set currentDonor(currentDonor:Donor) {
        this._currentDonor = currentDonor;
        if(this._currentDonor && this._currentDonor.id)
            this.selectedDonor = this._currentDonor;
        this.loadDonations();
        this.loadDonorContacts();  
    } 

    constructor(private donorsService: DonorsService) { }
   
    ngOnInit() {
        // this.loadDonor();
        // this.loadDonation();
    }
    loadDonations(){
            if(this.selectedDonor){   
                this.donorsService.getDonation(this.selectedDonor.id).then(x => {
                    if(x)
                    this.donations = x;
                    else
                        this.donation = new Donation();
                });
            }
            this.donation = new Donation();
            this.donation.isThank = false;
            this.donation.date = moment().toDate() ;  

    }
    loadDonorContacts(){
            if(this.selectedDonor){ 
                this.donorsService.getDonorContact(this.selectedDonor.id).then(x => {
                this.donorContacts = x
                });
            }            
            this.donorContact = new DonorContact();
    }
    change(id:number) {
        this.dirty = true;
        var number = this.donations[id].id;
        this.listIndex[this.index++]=number;

    }
    save(){
        if(this.dirty)
            this.donorsService.updateDonationsThanks(this.listIndex)
            //.then(x =>{
             //if(x){}
                // for(var i=0;i< this.listIndex.length ;i++ ){
                //     var donat = this.donations.find(x => x.id == this.listIndex[i])
                //     if(donat)
                //         donat.isThank = !donat.isThank;
                //} 
             // });
        if(this.donation.sum && this.donation.type){
            this.donation.donorID = this.selectedDonor.id;
            this.donorsService.addDonation(this.donation).then(x=>{
            if(x){
               this.donations.push(this.donation);
               this.donation = new Donation();}
            })
        }
        if(this.donorContact.details && this.donorContact.date ){    
            this.donorContact.donorID = this.selectedDonor.id;
            this.donorsService.addDonorContact(this.donorContact).then(x=>{
            if(x){
               this.donorContacts.push(this.donorContact);
               this.donorContact = new DonorContact()
            }})
        } 
    }
    cancel(){
        this.donation = new Donation();
        this.donorContact = new DonorContact();
    }

}
