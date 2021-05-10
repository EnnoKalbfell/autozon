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
  public login(username: String, password: String) {
    this.apiService.post('auth/signin', {
      email: username,
      password: password
    }).subscribe((res: any) => {
      sessionStorage.setItem('token', res.access_token);
    });
  }

  /**
   * getToken
   */
  public getUser() {
    const userSource$ = new BehaviorSubject<IUser | null>(null);
    
    const requestOptions: IRequestOptions = {
      headers: new HttpHeaders({['Authorization']: `Bearer ${sessionStorage.getItem('token')}`})
    }
    // TODO: Passing authorization header seems not to work
    this.apiService.post('auth/authenticatedUser', requestOptions).subscribe((res: any) => {
      userSource$.next(res as IUser)
    });

    return {
      user: userSource$,
      token: sessionStorage.getItem('token')
    };
  }

  /**
   * registerCustomer
   */
  public registerCustomer(lastname: string, firstname: string, email: string, password: string, phone: string, streetAndHouseNumber: string,
    zipCode: string, city: string) {
      this.apiService.post('auth/signup/customer',
      {
        lastname: lastname,
        firstname: firstname,
        email: email,
        password: password,
        phone: phone,
        streetAndHouseNumber: streetAndHouseNumber,
        zipCode: zipCode,
        city: city
      }).subscribe((res: any) => {
        // sessionStorage.setItem('token', res.token)
      })
  }

  /**
   * registerDealer
   */
  public registerDealer(companyname: string, lastname: string, firstname: string, email: string, password: string, phone: string, streetAndHouseNumber: string,
    zipCode: string, city: string) {
      this.apiService.post('http://localhost:3000/auth/signup/dealer',
      {
        companyname: companyname,
        lastname: lastname,
        firstname: firstname,
        email: email,
        password: password,
        phone: phone,
        streetAndHouseNumber: streetAndHouseNumber,
        zipCode: zipCode,
        city: city
      }).subscribe((res: any) => {
        // sessionStorage.setItem('token', res.token)
      })
  }
}

