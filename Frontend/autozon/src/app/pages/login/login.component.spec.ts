import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { LoginService } from 'src/app/core/services/login/login.service';
import { FormBuilder } from '@angular/forms';
import { LoginMockService } from 'src/app/mocks/loginMock.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [
        { provide: LoginService, useValue: LoginMockService },
        FormBuilder
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
      const emailInput = component.loginForm.controls.email;
      const passwordInput = component.loginForm.controls.password;

      emailInput.setValue('test');
      passwordInput.setValue('sml12345');

      fixture.detectChanges();

      expect(component.loginForm.invalid).toBeTruthy();
      expect(component.loginForm.controls.email.value).toEqual('test');
      expect(component.loginForm.controls.password.value).toEqual('sml12345');
    });

    it('valid input marks form valid and sets value correctly', () => {
      const emailInput = component.loginForm.controls.email;
      const passwordInput = component.loginForm.controls.password;

      emailInput.setValue('test@mail.com');
      passwordInput.setValue('sml12345');

      fixture.detectChanges();

      expect(component.loginForm.invalid).toBeFalsy();
      expect(component.loginForm.controls.email.value).toEqual('test@mail.com');
      expect(component.loginForm.controls.password.value).toEqual('sml12345');
    });
  });
});
