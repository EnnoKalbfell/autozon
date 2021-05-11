import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICar } from '../../models/car.model';
import ApiService from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {

  constructor(private apiService: ApiService) { }

  fetchCars(): BehaviorSubject<ICar[]> {
    const carSource$ = new BehaviorSubject<ICar[]>([]);
    this.apiService.get('car/brand/model')


    return carSource$;
  }
}
