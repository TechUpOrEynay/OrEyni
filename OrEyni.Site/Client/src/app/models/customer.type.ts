export class Customer {
    CustomerId: number;
    FullName: string;

    constructor(customerId: number,fullName: string) {
        this.CustomerId=customerId;
        this.FullName=fullName;
    }
}