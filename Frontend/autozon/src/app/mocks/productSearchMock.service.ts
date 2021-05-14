import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICar } from '../core/models/car.model';
import { ICarModel } from '../core/models/carmodel.model';
import { car, carModel } from './dataMocks';

@Injectable({
  providedIn: 'root',
})
export class ProductSearchMockService {

  constructor() {}

  public fetchCarData(): BehaviorSubject<ICar[]> {
    const carSource$ = new BehaviorSubject<ICar[]>([car]);
    return carSource$;
  }

  public fetchModels(brandName: string = ''): BehaviorSubject<ICarModel[]> {
    const carModelSource$ = new BehaviorSubject<ICarModel[]>([carModel]);
    return carModelSource$;
  }
}
