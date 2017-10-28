import { Component, Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

import { ManagementSchool } from '../models/management.school.type'
import { ManagementProblem } from '../models/management.problem.type'
import { User } from '../models/user.type'
import { City } from '../models/city.type'
@Injectable()
export class ManagementService {
    constructor(private http: Http) {

    }

    getCities() {
        return this.http.get('http://localhost:4222/api/Management/GetCities')
            .map(response => response.json() as City[])
            .toPromise();
    }
    addSchool(school: ManagementSchool) {
        return this.http.post('http://localhost:4222/api/Management/AddSchool',school)
            .map(response => response.json() as boolean)
            .toPromise();
    }
    addProblem(problem: ManagementProblem) {
        return this.http.post('http://localhost:4222/api/Management/AddProblem',problem)
            .map(response => response.json() as boolean)
            .toPromise();
    }
    addUser(user: User) {
        return this.http.post('http://localhost:4222/api/Management/AddUser',user)
            .map(response => response.json() as boolean)
            .toPromise();
    }
}