import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../../models/product.model';
import ApiService from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private apiService: ApiService) {}

  fetchProductData(): BehaviorSubject<IProduct[]> {
    const productSource$ = new BehaviorSubject<IProduct[]>([]);

    this.apiService.get('product').subscribe(response => {
      productSource$.next(response as IProduct[])
    })
    return productSource$;
  }   
}
