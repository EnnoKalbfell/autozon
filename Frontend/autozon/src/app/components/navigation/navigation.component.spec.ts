import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';
import { LoginService } from 'src/app/core/services/login/login.service';
import { LoginMockService } from 'src/app/mocks/loginMock.service';
import { Router } from '@angular/router';
import { RouterMock } from 'src/app/mocks/routerMock';
import { HttpClient, HttpHandler } from '@angular/common/http';
import ApiService from 'src/app/core/services/api/api.service';
import ApiMockService from 'src/app/mocks/apiMock.service';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationComponent ],
      providers: [
        { provide: Router, useClass: RouterMock },
        { provide: ApiService, useClass: ApiMockService },
        { provide: LoginService, useClass: LoginMockService },
        HttpClient,
        HttpHandler
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('and dealer is signed in', () => {
    it('on initialization, dealer navigation is loaded', () => {
      // TODO: Check why user role is not set correctly
      expect(component.links).toEqual(component.dealerNav);
    });
  });

  describe('and customer is signed in', () => {
    it('on initialization, customer navigation is loaded', () => {
      // TODO: Check why user role is not set correctly
      expect(component.links).toEqual(component.customerNav);
    });
  });

  describe('and user is not signed in', () => {
    it('on initialization, visitor navigation is loaded', () => {
      expect(component.links).toEqual(component.visitorNav);
    });
  });
});
