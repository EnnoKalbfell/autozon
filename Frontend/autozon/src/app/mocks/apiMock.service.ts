import { IRequestOptions } from '../core/services/api/api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class ApiMockService {

  public get<T>(endPoint: string, options?: IRequestOptions): Observable<T> {
    return endPoint as unknown as Observable<T>;
  }

  public post<T>(
    endPoint: string,
    params: object,
    options?: IRequestOptions
  ): Observable<T> {
    return endPoint as unknown as Observable<T>;
  }

  public put<T>(
    endPoint: string,
    params: object,
    options?: IRequestOptions
  ): Observable<T> {
    return endPoint as unknown as Observable<T>;
  }

  public delete<T>(endPoint: string, options?: IRequestOptions): Observable<T> {
    return endPoint as unknown as Observable<T>;
  }
}