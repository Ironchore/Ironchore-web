import { Router } from '@angular/router';
import { ApiError } from './../../../shared/models/api-error.model';
import { User } from './../../../shared/models/user.model';
import { SessionService } from './../../../shared/services/sessions.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = new User();
  apiError: ApiError;

  constructor(
    private sessionService: SessionService, 
    private router: Router
  ) {}

  onSubmitLogin(loginForm: FormGroup): void {
    if (loginForm.valid) {
      this.sessionService.authenticate(this.user)
        .subscribe(
          () => {
            loginForm.reset();
            this.router.navigate(['/kidregister']);
          },
          (error: ApiError) => this.apiError = error
        );
    }
  }
}