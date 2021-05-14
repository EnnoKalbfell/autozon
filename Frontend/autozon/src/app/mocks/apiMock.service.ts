import { IRequestOptions } from '../core/services/api/api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class ApiMockService {

  public get<T>(endPoint: string, options?: IRequestOptions, returnValue?: any): Observable<T> {
    return returnValue;
  }

  public post<T>(
    endPoint: string,
    params: object,
    options?: IRequestOptions,
    returnValue?: any
  ): Observable<T> {
    return returnValue;
  }

  public put<T>(
    endPoint: string,
    params: object,
    options?: IRequestOptions,
    returnValue?: any
  ): Observable<T> {
    return returnValue;
  }

  public delete<T>(endPoint: string, options?: IRequestOptions, returnValue?: any): Observable<T> {
    return returnValue;
  }
}