export class Donor {
    id: number;
    firstName: string;
    lastName: string;
    fullName: string;
    details: string;
    phone: number;
    email: string;
    isActive: boolean;
    constructor(donorId?: number,
        firstName?: string,
        lastName?: string,
        fullName?: string,
        fullAdress?: string,
        details?: string,
        phone?: number,
        email?: string,
        isActive?: boolean) {

    }
}