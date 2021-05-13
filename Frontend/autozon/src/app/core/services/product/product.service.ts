import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProduct } from '../../models/product.model';
import ApiService, { IRequestOptions } from '../api/api.service';
import { HttpHeaders } from '@angular/common/http';
import { ICartModel } from '../../models/cart.model';

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
      productSource$.next(response as IProduct[]);
    });
    return productSource$;
  }

  fetchMyProductData(): BehaviorSubject<IProduct[]> {
    const productSource$ = new BehaviorSubject<IProduct[]>([]);

    const token: string = sessionStorage.getItem('token') || '';
    const requestOptions: IRequestOptions = {
      headers: new HttpHeaders({['Authorization']: `Bearer ${token}`})
    };
    this.apiService.get('user/products', requestOptions).subscribe(response => {
      productSource$.next(response as IProduct[]);
    });
    return productSource$;
  }

  deleteMyProduct(id: number): any {
    const response$ = new BehaviorSubject<JSON | undefined>(undefined);

    const token: string = sessionStorage.getItem('token') || '';
    const requestOptions: IRequestOptions = {
      headers: new HttpHeaders({['Authorization']: `Bearer ${token}`})
    };
    this.apiService.put(`product/${id}/delete`, {}, requestOptions).subscribe(res => {
      response$.next(JSON.parse(JSON.stringify(res)));
    });
    return response$;
  }

  fetchDetailProductData(id: any): BehaviorSubject<IProduct> {
    const productSource$ = new BehaviorSubject<IProduct>({});

    this.apiService.get('product/' + id).subscribe(res => {
      productSource$.next(res as IProduct);
    });
    return productSource$;
  }

  placeOrder(productIds: number[]): BehaviorSubject<JSON | undefined> {
    const response$ = new BehaviorSubject<JSON | undefined>(undefined);

    const token: string = sessionStorage.getItem('token') || '';
    const requestOptions: IRequestOptions = {
      headers: new HttpHeaders({['Authorization']: `Bearer ${token}`})
    };

    this.apiService.post('order', {productIds}, requestOptions).subscribe(res => {
      response$.next(JSON.parse(JSON.stringify(res)));
    });
    return response$;
  }
}
@Injectable()
export class ProductIdService {
  public sharedData: number;

  constructor() {
    this.sharedData = 0;
  }

  setId(id: number): void {
    localStorage.setItem('productId', JSON.stringify(id));
  }

  getId(): number {
    this.sharedData = Number(localStorage.getItem('productId'));
    return this.sharedData;
  }
}
