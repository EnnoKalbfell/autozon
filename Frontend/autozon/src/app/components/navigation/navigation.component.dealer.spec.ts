import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';
import { LoginService } from 'src/app/core/services/login/login.service';
import { Router } from '@angular/router';
import { RouterMock } from 'src/app/mocks/routerMock';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { LoginDealerMockService } from 'src/app/mocks/loginDealerMock';
import { By } from '@angular/platform-browser';

describe('NavigationComponent > Dealer', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationComponent ],
      providers: [
        { provide: Router, useClass: RouterMock },
        { provide: LoginService, useClass: LoginDealerMockService },
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

  xdescribe('and dealer is signed in', () => {
    it('on initialization, dealer navigation is loaded', () => {
      // TODO: Check why navigation is not set correctly
      // TODO: User is set correctly, role is correct
      expect(component.links).toEqual(component.dealerNav);
    });

    describe('and element was clicked', () => {
      it('should trigger navigate function', () => {
        const navigateSpy = spyOn(component, 'navigate');
        const callLogoutSpy = spyOn(component, 'callLogout');
        const item = fixture.debugElement.query(By.css('.link')).nativeElement;

        item.dispatchEvent(new Event('click'));
        fixture.detectChanges();

        expect(navigateSpy).toHaveBeenCalled();
        expect(callLogoutSpy).not.toHaveBeenCalled();
      });

      it('should trigger callLogout function', () => {
        const navigateSpy = spyOn(component, 'navigate');
        const callLogoutSpy = spyOn(component, 'callLogout');
        const item = fixture.debugElement.query(By.css('.functionLink')).nativeElement;

        item.dispatchEvent(new Event('click'));
        fixture.detectChanges();

        expect(navigateSpy).not.toHaveBeenCalled();
        expect(callLogoutSpy).toHaveBeenCalled();
      });
    });
  });
});
