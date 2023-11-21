import { Component } from '@angular/core';
import { FormGroup, FormControl, FormControlName, Validator, Validators } from '@angular/forms'
import { from } from 'rxjs';

@Component({
  selector: 'app-responsive',
  templateUrl: './responsive.component.html',
  styleUrls: ['./responsive.component.scss']
})
export class ResponsiveComponent {

  loginForm = new FormGroup({
    emailId: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  })

  loginUser() {
    console.log(this.loginForm.value)
  }

  get emailId() {
    return this.loginForm.get('emailId')
  }

  get password() {
    return this.loginForm.get('password')
  }

}
