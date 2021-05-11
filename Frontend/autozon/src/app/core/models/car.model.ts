import { ICarModel } from './carmodel.model';

export interface ICar{
    id: number;
    carBrand: string;
    carModelId: number;
    carModel: ICarModel;
}
