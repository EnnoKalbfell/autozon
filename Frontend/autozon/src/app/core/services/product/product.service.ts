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
    const token: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvc2lnbmluIiwiaWF0IjoxNjIwMTI2ODgwLCJleHAiOjE2MjAxMzA0ODAsIm5iZiI6MTYyMDEyNjg4MCwianRpIjoiVW5yS1JWWnRBM1FwYXlMQiIsInN1YiI6MiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyIsImlkIjoyLCJyb2xlIjoiZGVhbGVyIiwiZW1haWwiOiJ2ZXJpZmllZGRlYWxlckB0ZXN0LmNoIiwiZmlyc3ROYW1lIjoiVGVzdCIsImxhc3ROYW1lIjoiVmVyaWZpZWQgRGVhbGVyIn0.vHftj-o_r69yg407VTeBkwEzVlktxSpOM9D0cVEaTVw';
    const requestOptions: IRequestOptions = {
      headers: new HttpHeaders({['Authorization']: `Bearer ${token}`})
    }
    this.apiService.get('user/products', requestOptions).subscribe(response => {
      productSource$.next(response as IProduct[])
    })
    return productSource$;
  }  
}
