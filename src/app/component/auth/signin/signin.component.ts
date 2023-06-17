import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) {

  }
  signinForm = this.fb.group({
    email: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })
  HandleSubmit() {
    if (this.signinForm.invalid) return;
    this.authService.signin(this.signinForm.value).subscribe((user) => {
      // console.log(user.user.id);
      if (user.user.id == 1) {
        this.router.navigate(['/admin'])
        setTimeout(() => {
          alert('Đăng nhập thành công')
        }, 200);
      } else {
        this.router.navigate(['/']);
      }

    })
  }

}
