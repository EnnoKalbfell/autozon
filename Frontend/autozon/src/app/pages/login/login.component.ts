import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../core/services/login/login.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService,private fb: FormBuilder) {}

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  ngOnInit(): void {}

  login(): void {
    if (!this.loginForm.valid) {
      return;
    }
    this.loginService.login(
      this.loginForm.controls.email.value,
      this.loginForm.controls.password.value);
  }
}
