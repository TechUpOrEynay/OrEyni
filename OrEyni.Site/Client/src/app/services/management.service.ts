import { Component, Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

import { ManagementSchool } from '../models/management.school.type'
import { ManagementProblem } from '../models/management.problem.type'
import { ManagementUsers } from '../models/management.users.type'
import { City } from '../models/city.type'
@Injectable()
export class ManagementService {
    constructor(private http: Http) {

    }

    getCities() {
        return this.http.get('http://localhost:4222/api/Managment/GetCities')
            .map(response => response.json() as City[])
            .toPromise();
    }
    addSchool(school: ManagementSchool) {
        return this.http.get('http://localhost:4222/api/Managment/AddSchool')
            .map(response => response.json() as boolean)
            .subscribe();
    }
    addProblem(problem: ManagementProblem) {
        return this.http.get('http://localhost:4222/api/Managment/AddProblem')
            .map(response => response.json() as boolean)
            .subscribe();
    }
    addUser(user: ManagementUsers) {
        return this.http.get('http://localhost:4222/api/Managment/AddUser')
            .map(response => response.json() as boolean)
            .subscribe();
    }
}