import { TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';
import ApiService from '../api/api.service';
import ApiMockService from 'src/app/mocks/apiMock.service';
import { Router } from '@angular/router';
import { RouterMock } from 'src/app/mocks/routerMock';
import { customer, dealer } from 'src/app/mocks/dataMocks';
import { BehaviorSubject } from 'rxjs';

describe('LoginService', () => {
  let service: LoginService;
  const apiService: ApiMockService = new ApiMockService();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ApiService, useValue: apiService },
        { provide: Router, useClass: RouterMock }
      ]
    });
    service = TestBed.inject(LoginService);
  });

  xdescribe('and login is triggered', () => {
    it('login api is called correctly', () => {
      // TODO: Test correctly
      const spy = spyOn(service, 'login');
      service.login('user@test.ch', 'sml12345');

      expect(spy).toHaveBeenCalled();
    });
  });

  xdescribe('and getUser is triggered', () => {
    it('getUser api is called correctly', () => {
      // TODO: Test correctly, not waited for IUser value
      const result = service.getUser();

      expect(result).toEqual(new BehaviorSubject(customer));
    });
  });

  describe('and logout is triggered', () => {
    it('logout api is called correctly', () => {
      const result = service.logout();

      expect(result).toEqual(new BehaviorSubject('logged out'));
    });
  });

  xdescribe('and registerCustomer is triggered', () => {
    it('registerCustomer api is called correctly', () => {
      // TODO: Test correctly
      const spy = spyOn(service, 'registerCustomer');
      service.registerCustomer(
        customer.lastName,
        customer.firstName,
        customer.email,
        'sml12345',
        customer.phone,
        customer.streetAndHouseNumber,
        customer.zipCode,
        customer.city
      );

      expect(spy).toHaveBeenCalled();
    });
  });

  xdescribe('and registerDealer is triggered', () => {
    it('registerDealer api is called correctly', () => {
      // TODO: Test correctly
      const spy = spyOn(service, 'registerDealer');
      service.registerDealer(
        dealer.companyName,
        dealer.lastName,
        dealer.firstName,
        dealer.email,
        'sml12345',
        dealer.phone,
        dealer.streetAndHouseNumber,
        dealer.zipCode,
        dealer.city
      );

      expect(spy).toHaveBeenCalled();
    });
  });
});
