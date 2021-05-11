import { IUser } from './user.model';
import { ICar } from './car.model';

export interface ICartModel {
  id: number;
  amount: number;
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
