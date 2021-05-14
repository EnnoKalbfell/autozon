import { NumberSymbol } from '@angular/common';

export interface IUser {
    id: number;
    lastName: string;
    firstName: string;
    companyName: string;
    email: string;
    phone: string;
    streetAndHouseNumber: string;
    zipCode: string;
    city: string;
    country: string;
    role: string;
    verified: boolean;
};
