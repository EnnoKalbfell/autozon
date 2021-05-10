import { NumberSymbol } from "@angular/common";
import { IterableChangeRecord } from "@angular/core";
import { ICar } from "./car.model";
import { IUser } from "./user.model";

export interface IProduct{
    id?: number;
    name?: string;
    dealer?: IUser;
    manufacturer?: string;
    price?: number;
    streetLegality?: boolean;
    carId?: number;
    shortDescription?: string;
    description?: string;
    category?: string;
    serialNumber?: string;
    preview?: string;
    preview2?: string;
    preview3?: string;
    car?: ICar[];

}