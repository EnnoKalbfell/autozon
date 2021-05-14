import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { LoginService } from 'src/app/core/services/login/login.service';
import { Router } from '@angular/router';
import ApiService from 'src/app/core/services/api/api.service';
import { RouterMock } from 'src/app/mocks/routerMock';
import ApiServiceMock from 'src/app/mocks/apiServiceMock';
import { FormBuilder } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [
        LoginService,
        FormBuilder,
        { provide: ApiService, useValue: ApiServiceMock },
        { provide: Router, useValue: RouterMock }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('on initialization, the form should be empty', () => {
    expect(component.loginForm.invalid).toBeTruthy();
    expect(component.loginForm.controls.email.value).toEqual('');
    expect(component.loginForm.controls.password.value).toEqual('');
  });

  describe('after change', () => {
    it('invalid email marks form invalid', () => {
      let emailInput = component.loginForm.controls.email;
      let passwordInput = component.loginForm.controls.password;
  
      emailInput.setValue('test');
      passwordInput.setValue('sml12345');
  
      fixture.detectChanges();
  
      expect(component.loginForm.invalid).toBeTruthy();
      expect(component.loginForm.controls.email.value).toEqual('test');
      expect(component.loginForm.controls.password.value).toEqual('sml12345');
    });
  
    it('valid input marks form valid and sets value correctly', () => {
      let emailInput = component.loginForm.controls.email;
      let passwordInput = component.loginForm.controls.password;
  
      emailInput.setValue('test@mail.com');
      passwordInput.setValue('sml12345');
  
      fixture.detectChanges();
  
      expect(component.loginForm.invalid).toBeFalsy();
      expect(component.loginForm.controls.email.value).toEqual('test@mail.com');
      expect(component.loginForm.controls.password.value).toEqual('sml12345');
    });
  });
});
