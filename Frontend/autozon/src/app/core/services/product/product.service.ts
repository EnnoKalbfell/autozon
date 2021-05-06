import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../../models/product.model';
import ApiService, { IRequestOptions } from '../api/api.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiService: ApiService;
  constructor(apiService: ApiService) {
    this.apiService = apiService;
  }

  fetchProductData(): BehaviorSubject<IProduct[]> {
    const productSource$ = new BehaviorSubject<IProduct[]>([]);

    this.apiService.get('product').subscribe(response => {
      productSource$.next(response as IProduct[])
    })
    return productSource$;
  }

  fetchMyProductData(): BehaviorSubject<IProduct[]> {
    const productSource$ = new BehaviorSubject<IProduct[]>([]);
    // TODO: Get currently active token as soon as token is saved in session storage
    const token: string = sessionStorage.getItem('token') || '';
    const requestOptions: IRequestOptions = {
      headers: new HttpHeaders({['Authorization']: `Bearer ${token}`})
    }
    this.apiService.get('user/products', requestOptions).subscribe(response => {
      productSource$.next(response as IProduct[])
    })
    return productSource$;
  }  
}
