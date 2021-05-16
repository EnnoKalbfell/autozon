import { BehaviorSubject } from 'rxjs';
import { IUser } from '../core/models/user.model';
import { dealer } from './dataMocks';

export class LoginDealerMockService {

  constructor() { }

  public login(username: string, password: string): void {}

  public logout(): BehaviorSubject<string | undefined> {
    const logoutSource$ = new BehaviorSubject<string | undefined>(
      JSON.parse('successful')
    );
    return logoutSource$;
  }

  public getUser(): BehaviorSubject<IUser | undefined> {
    const userSource$ = new BehaviorSubject<IUser | undefined>(dealer);
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
  ): void {}

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
  ): void {}
}
