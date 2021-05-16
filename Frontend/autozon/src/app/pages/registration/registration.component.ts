import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup | any;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      role: [],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      company: [''],
      birthday: ['', Validators.required],
      street: ['', Validators.required],
      postalCode: ['', Validators.required],
      town: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required] 
    });}

    get f() { return this.registerForm.controls; }

    onSubmit(): void {
    this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm?.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm?.value, null, 4));
  }
}
