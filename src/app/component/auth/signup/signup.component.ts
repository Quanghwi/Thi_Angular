import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private auth: AuthService, private router: Router, private fb: FormBuilder) { }
  signupForm = this.fb.group({
    email: [''],
    password: ['']
  })

  handleSignup() {
    if (this.signupForm.invalid) return
    this.auth.signUp(this.signupForm.value).subscribe((data) => {
      this.router.navigate(['/signin'])
      setTimeout(() => {
        alert('Đăng kí tài khoản thành công')
      }, 200)
    })
  }
}
