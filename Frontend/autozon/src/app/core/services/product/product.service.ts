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
    this.apiService.delete(`product/${id}/delete`, requestOptions).subscribe(res => {
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
}
@Injectable()
export class ProductIdService {
  public sharedData: number;

  constructor() {
    this.sharedData = 0;
  }

  setId(id:number): void {
    localStorage.setItem('productId', JSON.stringify(id));
  }

  getId(): Number {
    this.sharedData = Number(localStorage.getItem('productId'));
    return this.sharedData;
  }
}
