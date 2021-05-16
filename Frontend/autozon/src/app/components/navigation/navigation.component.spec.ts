import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';
import { LoginService } from 'src/app/core/services/login/login.service';
import { LoginMockService } from 'src/app/mocks/loginMock.service';
import { Router } from '@angular/router';
import { RouterMock } from 'src/app/mocks/routerMock';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { By } from '@angular/platform-browser';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationComponent ],
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
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('and user is not signed in', () => {
    it('on initialization, visitor navigation is loaded', () => {
      expect(component.links).toEqual(component.visitorNav);
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
    });
  });
});
