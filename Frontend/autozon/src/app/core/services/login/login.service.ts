import { Injectable } from '@angular/core';
import ApiService, { IRequestOptions } from '../api/api.service';
import { HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private apiService: ApiService, private router: Router) { }

  /**
   * login
   */
  public login(username: string, password: string): void {
    this.apiService.post('auth/signin', {
      email: username,
      password
    }).subscribe((res: any) => {
      sessionStorage.setItem('token', res.access_token);
      this.router.navigate(['/']).then(() => {
        window.location.reload();
      });
    });
  }

  /**
   * Logout
   */
  public logout(): BehaviorSubject<string | undefined> {
    const logoutSource$ = new BehaviorSubject<string | undefined>(undefined);

    const token: string = sessionStorage.getItem('token') || '';
    const requestOptions: IRequestOptions = {
      headers: new HttpHeaders({['Authorization']: `Bearer ${token}`})
    };
    this.apiService.post('auth/signout', {}, requestOptions).subscribe(res => {
      if (res) {
        sessionStorage.removeItem('token');
        logoutSource$.next('logged out');
      }
    });

    return logoutSource$;
  }

  /**
   * getToken
   */
  public getUser(): BehaviorSubject<IUser | undefined> {
    const userSource$ = new BehaviorSubject<IUser | undefined>(undefined);

    const token: string = sessionStorage.getItem('token') || '';

    if (token === '') {
      return userSource$;
    }

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
    city: string,
    country: string
  ): BehaviorSubject<string | undefined> {
    const response$ = new BehaviorSubject<string | undefined>(undefined);
    this.apiService.post('auth/signup/customer',
    {
      lastName: lastname,
      firstName: firstname,
      email,
      password,
      phone,
      streetAndHouseNumber,
      zipCode,
      city,
      country
    }).subscribe((res: any) => {
      if (res) {
        response$.next('successfull');
      }
    });
    return response$;
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
    city: string,
    country: string
  ): BehaviorSubject<string | undefined> {
    const response$ = new BehaviorSubject<string | undefined>(undefined);
    this.apiService.post('auth/signup/dealer',
    {
      companyName: companyname,
      lastName: lastname,
      firstName: firstname,
      email,
      password,
      phone,
      streetAndHouseNumber,
      zipCode,
      city,
      country
    }).subscribe((res: any) => {
      if (res) {
        response$.next('successfull');
      }
    });
    return response$;
  }
}
