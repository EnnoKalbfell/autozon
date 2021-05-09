import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICar } from '../../models/car.model';
import { ICarModel } from '../../models/carmodel.model';
import ApiService, { IRequestOptions } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class ProductSearchService {
  brand = '';
  model = '';

  constructor(private apiService: ApiService) {}

  fetchCarData(): BehaviorSubject<ICar[]> {
    const carSource$ = new BehaviorSubject<ICar[]>([]);

    this.apiService.get('car').subscribe((response) => {
      carSource$.next(response as ICar[]);
    });
    return carSource$;
  }

  fetchModels(brandName: string = ''): BehaviorSubject<ICarModel[]> {
    const carModelSource$ = new BehaviorSubject<ICarModel[]>([]);
    const requestOptions: IRequestOptions = {
      params: new HttpParams().set('brand', brandName),
    };

    this.apiService.get('car/model', requestOptions).subscribe((response) => {
      carModelSource$.next(response as ICarModel[]);
    });
    return carModelSource$;
  }

  safeSelectedValue(newBrand: string, newModel: string) {
    this.brand = newBrand;
    this.model = newModel;
  }

  getBrandAndModel() {
    console.log(this.brand, this.model);
    
    return [{ brand: this.brand, model: this.model }];
  }
}
