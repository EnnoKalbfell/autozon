import { Injectable } from '@angular/core';
import ApiService, { IRequestOptions } from '../api/api.service';
import { HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private apiService: ApiService) { }

  /**
   * login
   */
  public login(username: string, password: string): void {
    this.apiService.post('auth/signin', {
      email: username,
      password
    }).subscribe((res: any) => {
      sessionStorage.setItem('token', res.access_token);
    });
  }

  /**
   * getToken
   */
  public getUser(): BehaviorSubject<IUser | undefined> {
    const userSource$ = new BehaviorSubject<IUser | undefined>(undefined);

    const token: string = sessionStorage.getItem('token') || '';
    const requestOptions: IRequestOptions = {
      headers: new HttpHeaders({['Authorization']: `Bearer ${token}`})
    };
    this.apiService.post('auth/authenticatedUser', {}, requestOptions).subscribe(res => {
      userSource$.next(JSON.parse(JSON.stringify(res)) as IUser);
    });

    return userSource$;
  }

  /**
   * registerCustomer
   */
  public registerCustomer(
    lastname: string,
    firstname: string,
    email: string,
    password: string,
    phone: string,
    streetAndHouseNumber: string,
    zipCode: string,
    city: string
  ): void {
      this.apiService.post('auth/signup/customer',
      {
        lastName: lastname,
        firstName: firstname,
        email,
        password,
        phone,
        streetAndHouseNumber,
        zipCode,
        city
      }).subscribe((res: any) => {
        // sessionStorage.setItem('token', res.token)
      });
  }

  /**
   * registerDealer
   */
  public registerDealer(
    companyname: string,
    lastname: string,
    firstname: string,
    email: string,
    password: string,
    phone: string,
    streetAndHouseNumber: string,
    zipCode: string,
    city: string
  ): void {
      this.apiService.post('http://localhost:3000/auth/signup/dealer',
      {
        companyName: companyname,
        lastName: lastname,
        firstName: firstname,
        email,
        password,
        phone,
        streetAndHouseNumber,
        zipCode,
        city
      }).subscribe((res: any) => {
        // sessionStorage.setItem('token', res.token)
      });
  }
}
