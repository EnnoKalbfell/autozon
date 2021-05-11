import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Handles all communication between the API and this application.
 */
@Injectable({
  providedIn: 'root',
})
export default class ApiService {
  constructor(private http: HttpClient) {}

  /**
   * A basic GET request template.
   *
   * @template T Template
   * @param endPoint Endpoint of the request
   * @param [options] Request options
   * @returns Observable<T> Request response
   */
  public get<T>(endPoint: string, options?: IRequestOptions): Observable<T> {
    return this.http.get<T>('/api/' + endPoint, options);
  }

  /**
   * A basic POST request template.
   *
   * @template T Template
   * @param endPoint Endpoint of the request
   * @param params Request parameters
   * @param [options] Request options
   * @returns Observable<T> Request response
   */
  public post<T>(
    endPoint: string,
    params: object,
    options?: IRequestOptions
  ): Observable<T> {
    return this.http.post<T>('/api/' + endPoint, params, options);
  }

  /**
   * A basic PUT request template.
   *
   * @template T Template
   * @param endPoint Endpoint of the request
   * @param params Request parameters
   * @param [options] Request options
   * @returns Observable<T> Request response
   */
  public put<T>(
    endPoint: string,
    params: object,
    options?: IRequestOptions
  ): Observable<T> {
    return this.http.put<T>('/api/' + endPoint, params, options);
  }

  /**
   * A basic DELETE request template.
   *
   * @template T Template
   * @param endPoint Endpoint of the request
   * @param [options] Request options
   * @returns Observable<T> Request response
   */
  public delete<T>(endPoint: string, options?: IRequestOptions): Observable<T> {
    return this.http.delete<T>('/api/' + endPoint, options);
  }
}

/**
 * Type defintion. Describes all possible request options.
 * @export
 */
export interface IRequestOptions {
  headers?: HttpHeaders;
  observe?: 'body';
  params?: HttpParams;
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  body?: any;
}
