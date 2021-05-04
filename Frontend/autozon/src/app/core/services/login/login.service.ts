import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  /**
   * login
   */
  public login(username: String, password: String) {
    this.httpClient.post('http://localhost:3000/auth/signin',
      {
        email: username,
        password: password
      }).subscribe((res: any) => {
        sessionStorage.setItem('token', res.token)
        sessionStorage.setItem('role', res.role)
        sessionStorage.setItem('user', res.user)
      })
  }

  /**
   * getToken
   */
  public getUser() {
    return {
      user: sessionStorage.getItem('user'),
      token: sessionStorage.getItem('token'),
      role: sessionStorage.getItem('role')
    }
  }

  /**
   * registerCustomer
   */
  public registerCustomer(lastname: string, firstname: string, email: string, password: string, phone: string, streetAndHouseNumber: string,
    zipCode: string, city: string) {
      this.httpClient.post('http://localhost:3000/auth/signup/customer',
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
        sessionStorage.setItem('token', res.token)
      })
  }

  /**
   * registerDealer
   */
  public registerDealer(companyname: string, lastname: string, firstname: string, email: string, password: string, phone: string, streetAndHouseNumber: string,
    zipCode: string, city: string) {
      this.httpClient.post('http://localhost:3000/auth/signup/dealer',
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
        sessionStorage.setItem('token', res.token)
      })
  }
}

