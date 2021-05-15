import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationUserComponent } from './navigation-user.component';
import { LoginService } from 'src/app/core/services/login/login.service';
import { LoginMockService } from 'src/app/mocks/loginMock.service';
import { IUser } from 'src/app/core/models/user.model';
import { dealer } from 'src/app/mocks/dataMocks';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterMock } from 'src/app/mocks/routerMock';

describe('NavigationUserComponent', () => {
  let component: NavigationUserComponent;
  let fixture: ComponentFixture<NavigationUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationUserComponent ],
      providers: [
        { provide: LoginService, useClass: LoginMockService },
        { provide: Router, useClass: RouterMock },
        HttpClient,
        HttpHandler
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('and user is not logged in', () => {
    it('should display visitor profile', () => {
      const user: IUser = {
        id: 0,
        lastName: '',
        firstName: '',
        companyName: '',
        email: '',
        phone: '',
        streetAndHouseNumber: '',
        zipCode: '',
        city: '',
        country: '',
        role: '',
        verified: false
      };

      expect(component.user).toEqual(user);
    });
  });

  describe('and dealer is logged in', () => {
    it('should display dealer profile', () => {
      // TODO: Check why user is not logged in
      expect(component.user).toEqual(dealer);
    });
  });
});
