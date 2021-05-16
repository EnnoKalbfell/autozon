import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LoginService } from 'src/app/core/services/login/login.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup | any;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      role: ['costumer', Validators.required],
      firstname: ['', [Validators.required, Validators.maxLength(100)]],
      lastname: ['', [Validators.required, Validators.maxLength(100)]],
      company: ['', [Validators.maxLength(150)]],
      birthday: ['', Validators.required],
      street: ['', [Validators.required, Validators.maxLength(100)]],
      postalCode: ['', [Validators.required, Validators.maxLength(10)]],
      town: ['', [Validators.required, Validators.maxLength(100)]],
      phone: ['', [Validators.required, Validators.maxLength(20)]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.maxLength(255)],
      ],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));

    var temp = this.registerForm.get('role').value;
    if (temp === 'customer') {
      this.loginService.registerCustomer(
        this.registerForm.get('lastname').value,
        this.registerForm.get('firstname').value,
        this.registerForm.get('email').value,
        this.registerForm.get('password').value,
        this.registerForm.get('phone').value,
        this.registerForm.get('street').value,
        this.registerForm.get('postalCode').value,
        this.registerForm.get('town').value
      );
      window.location.replace('http://localhost:4200/login');
    } else {
      if (this.registerForm.get('company').value !== '') {
        this.loginService.registerDealer(
          this.registerForm.get('company').value,
          this.registerForm.get('lastname').value,
          this.registerForm.get('firstname').value,
          this.registerForm.get('email').value,
          this.registerForm.get('password').value,
          this.registerForm.get('phone').value,
          this.registerForm.get('street').value,
          this.registerForm.get('postalCode').value,
          this.registerForm.get('town').value
        );
      }
      window.location.replace('http://localhost:4200/login');
    }
  }
}
