import { TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';
import ApiService from '../api/api.service';
import ApiMockService from 'src/app/mocks/apiMock.service';
import { Router } from '@angular/router';
import { RouterMock } from 'src/app/mocks/routerMock';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginService ],
      providers: [
        { provide: ApiService, useValue: ApiMockService },
        { provide: Router, useValue: RouterMock }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginService);
  });

  describe('and login is triggered', () => {
    it('login api is called correctly', () => {
      service.login('user@test.ch', 'sml12345');

      expect(service.login).toHaveBeenCalled(); // TODO: How to test?
      // TODO: Check if apiService.post has been called
      // expect(ApiService.prototype.post).toHaveBeenCalled();
    });
  });
});
