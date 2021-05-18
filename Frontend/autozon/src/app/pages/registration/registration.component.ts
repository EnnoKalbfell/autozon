import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LoginService } from 'src/app/core/services/login/login.service';
import { Router } from '@angular/router';

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
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      role: ['costumer', Validators.required],
      firstname: ['', [Validators.required, Validators.maxLength(100)]],
      lastname: ['', [Validators.required, Validators.maxLength(100)]],
      company: ['', [Validators.maxLength(150)]],
      street: ['', [Validators.required, Validators.maxLength(100)]],
      postalCode: ['', [Validators.required, Validators.maxLength(10)]],
      town: ['', [Validators.required, Validators.maxLength(100)]],
      country: ['', [Validators.required, Validators.maxLength(100)]],
      phone: ['', [Validators.required, Validators.maxLength(20)]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.maxLength(255)],
      ],
      password: ['', Validators.required],
    });
  }

  get f(): any {
    return this.registerForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // must be saved temporary otherwise an error appears
    const temp = this.registerForm.controls.role.value;
    if (temp !== 'dealer') {
      this.loginService.registerCustomer(
        this.registerForm.controls.lastname.value,
        this.registerForm.controls.firstname.value,
        this.registerForm.controls.email.value,
        this.registerForm.controls.password.value,
        this.registerForm.controls.phone.value,
        this.registerForm.controls.street.value,
        this.registerForm.controls.postalCode.value,
        this.registerForm.controls.town.value,
        this.registerForm.controls.country.value
      ).subscribe(res => {
        if (res) {
          this.router.navigate(['/login']);
        }
      });
    } else {
      if (this.registerForm.controls.company.value !== '') {
        this.loginService.registerDealer(
          this.registerForm.controls.company.value,
          this.registerForm.controls.lastname.value,
          this.registerForm.controls.firstname.value,
          this.registerForm.controls.email.value,
          this.registerForm.controls.password.value,
          this.registerForm.controls.phone.value,
          this.registerForm.controls.street.value,
          this.registerForm.controls.postalCode.value,
          this.registerForm.controls.town.value,
          this.registerForm.controls.country.value
        ).subscribe(res => {
          if (res) {
            this.router.navigate(['/login']);
          }
        });
      }
    }
  }
}
