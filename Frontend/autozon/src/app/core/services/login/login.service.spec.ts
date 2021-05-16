import { TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';
import ApiService from '../api/api.service';
import ApiMockService from 'src/app/mocks/apiMock.service';
import { Router } from '@angular/router';
import { RouterMock } from 'src/app/mocks/routerMock';
import { customer, dealer } from 'src/app/mocks/dataMocks';

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

  describe('and login is triggered', () => {
    it('login api is called correctly', () => {
      const spy = spyOn(service, 'login');
      service.login('user@test.ch', 'sml12345');

      expect(spy).toHaveBeenCalled();
    });
  });

  describe('and getUser is triggered', () => {
    it('getUser api is called correctly', () => {
      const spy = spyOn(service, 'getUser');
      service.getUser();

      expect(spy).toHaveBeenCalled();
    });
  });

  describe('and logout is triggered', () => {
    it('logout api is called correctly', () => {
      const spy = spyOn(service, 'logout');
      service.logout();

      expect(spy).toHaveBeenCalled();
    });
  });

  describe('and registerCustomer is triggered', () => {
    it('registerCustomer api is called correctly', () => {
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

  describe('and registerDealer is triggered', () => {
    it('registerDealer api is called correctly', () => {
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
