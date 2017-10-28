import { Component, Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

import { Donor } from '../models/donor.type'
import { Donation } from '../models/donation.type'
import { DonorContact } from '../models/donorContact.type'
@Injectable()
export class DonorsService {
    constructor(private http: Http) {

    }

    getDonors() {
        return this.http.get('http://localhost:4222/api/Donors/GetDonors')
            .map(response => response.json() as Donor[])
            .toPromise();
    }

     getDonorById(id: number) {
         return this.http.post('http://localhost:4222/api/Donors/getDonorById', id)
             .map(response => response.json() as Donor)
         .toPromise();
     }
     updateDonorDetailes(donor: Donor) {
         return this.http.post('http://localhost:4222/api/Donors/updateDonorDetailes', donor)
             .map(response => response.json() as boolean)
             .toPromise();

     }
     createNewDonor(donor: Donor) {
        return this.http.post('http://localhost:4222/api/Donors/createNewDonor', donor)
             .map(response => response.json())
             .toPromise();
      }
     deleteDonor(id: number) {
       return this.http.get(`http://localhost:4222/api/Donors/deleteDonor/${id}`)
            .map(response => response.json() as boolean)
            .toPromise();
     }
     getDonation(id: number) {
        return this.http.get(`http://localhost:4222/api/Donors/GetDonation/${id}`)
             .map(response => response.json() as Donation[])
             .toPromise();
     }
     getDonorContact(id: number) {
        return this.http.get(`http://localhost:4222/api/Donors/GetDonorContact/${id}`)
             .map(response => response.json()as DonorContact[])
             .toPromise();
     }
     addDonation(donation: Donation) {
        return this.http.post('http://localhost:4222/api/Donors/AddDonation',donation)
             .map(response => response.json()as boolean)
             .toPromise();
     }
     addDonorContact(donorContact: DonorContact) {
        return this.http.post('http://localhost:4222/api/Donors/AddDonorContact',donorContact)
             .map(response => response.json()as boolean)
             .toPromise();
     }
     updateDonationsThanks(listIndex: number[]) {
        return this.http.post('http://localhost:4222/api/Donors/updateDonationsThanks',listIndex)
             .map(response => response.json()as boolean)
             .toPromise();
     }
     
}
