import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../core/services/login/login.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService) {}
  email = '';
  password = '';

  ngOnInit(): void {}

  login(): void {
    if (this.email === '' || this.password === '') {
      return;
    }
    this.loginService.login(this.email, this.password);
  }
}
