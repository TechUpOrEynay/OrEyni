export class Customer {
    id?:number;
    familyChildID: number;
    firstName: string;
    lastName:string;
    fullName: string;
    tz:string;
    hmoid:number;
    schoolID:number;
    problemID:number;
    notes:string
    constructor(id?:number ,familyChildID?: number,firstName?: string,lastName?:string,fullName?: string, tz?:string,
        hmoid?:number, schoolID?:number, problemID?:number, notes?:string) {   
    }
}
