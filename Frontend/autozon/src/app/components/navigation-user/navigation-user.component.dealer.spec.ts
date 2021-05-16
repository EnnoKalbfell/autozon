import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationUserComponent } from './navigation-user.component';
import { LoginService } from 'src/app/core/services/login/login.service';
import { dealer } from 'src/app/mocks/dataMocks';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterMock } from 'src/app/mocks/routerMock';
import { LoginDealerMockService } from 'src/app/mocks/loginDealerMock';
import { By } from '@angular/platform-browser';

describe('NavigationUserComponent > Dealer', () => {
  let component: NavigationUserComponent;
  let fixture: ComponentFixture<NavigationUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationUserComponent ],
      providers: [
        { provide: LoginService, useClass: LoginDealerMockService },
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

  describe('and dealer is logged in', () => {
    it('should display dealer profile', () => {
      expect(component.user).toEqual(dealer);
      expect(fixture.debugElement.query(By.css('h3')).nativeElement.textContent).toContain(
        `${dealer.firstName} ${dealer.lastName}`
      );
      expect(fixture.debugElement.query(By.css('p')).nativeElement.textContent).toContain(
        dealer.email
      );
    });
  });
});
