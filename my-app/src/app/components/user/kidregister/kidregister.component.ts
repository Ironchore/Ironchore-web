import { ApiError } from '../../../shared/models/api-error.model';
import { Component } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { FormGroup } from '@angular/forms';
import { User } from '../../../shared/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './kidregister.component.html',
  styleUrls: ['./kidregister.component.css']
})
export class KidregisterComponent {

  user: User = new User();
  ApiError: ApiError;

  constructor(private userService: UserService, private router: Router) { }

  onSubmitSignUp(signupForm: FormGroup): void {
    console.log(signupForm);
    if (signupForm.valid) {
      this.userService.create(this.user)
        .subscribe(()=> {
          signupForm.reset();
          this.router.navigate(['/dashboard']);
        }, (error: ApiError) => this.ApiError = error
      );
    }

  }

}
