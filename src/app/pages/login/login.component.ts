import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  myForm: any;
  hide = true;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  getErrorMessage() {
    if (this.myForm.get('email').hasError('required')) {
      return 'Es necesario para ingresar';
    }
    return 'Por favor ingresa un email válido';
  }

  saveForm() {
    if (this.myForm.valid) {
      this.router.navigateByUrl('app/dashboard');
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
  }
}
