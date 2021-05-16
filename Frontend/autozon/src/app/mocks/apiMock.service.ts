import { IRequestOptions } from '../core/services/api/api.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { product, customer, car, carModel } from './dataMocks';

@Injectable({
  providedIn: 'root',
})
export default class ApiMockService {

  public get<T>(endPoint: string, options?: IRequestOptions): Observable<T> {
    if (endPoint === 'product' || endPoint === 'user/products'){
      return of([product]) as unknown as Observable<T>;
    }
    if (endPoint === 'product/1') {
      return of(product) as unknown as Observable<T>;
    }
    if (endPoint === 'car') {
      return of([car]) as unknown as Observable<T>;
    }
    if (endPoint === 'car/model') {
      return of([carModel]) as unknown as Observable<T>;
    }
    return of(undefined) as unknown as Observable<T>;
  }

  public post<T>(
    endPoint: string,
    params: object,
    options?: IRequestOptions
  ): Observable<T> {
    if (endPoint === 'order' || endPoint === 'auth/signout') {
      return of({success: 'successfull'}) as unknown as Observable<T>;
    }
    if (endPoint === 'auth/authenticatedUser') {
      return of(customer) as unknown as Observable<T>;
    }
    return of(undefined) as unknown as Observable<T>;
  }

  public put<T>(
    endPoint: string,
    params: object,
    options?: IRequestOptions
  ): Observable<T> {
    if (endPoint === 'product/1/delete') {
      return of({success: 'successfull'}) as unknown as Observable<T>;
    }
    return endPoint as unknown as Observable<T>;
  }

  public delete<T>(endPoint: string, options?: IRequestOptions): Observable<T> {
    return endPoint as unknown as Observable<T>;
  }
}
