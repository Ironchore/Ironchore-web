import { Router } from '@angular/router';
import { ApiError } from './../../../shared/models/api-error.model';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Chore } from '../../../shared/models/chore.model';
import { ChoreService } from 'src/app/shared/services/chore.service';



@Component({
  selector: 'app-chore-create',
  templateUrl: './chore-create.component.html',
  styleUrls: ['./chore-create.component.css']
})
export class ChoreCreateComponent  {

  chore: Chore = new Chore();
  ApiError: ApiError;

  constructor(private choreService: ChoreService, private router: Router) { }


  onSubmitCreate(choreForm: FormGroup): void {
    if(choreForm.valid) {
    this.choreService.create(this.chore)
      .subscribe(() => {
        choreForm.reset();
        this.router.navigate(['/chores']);
      }, (error: ApiError) => this.ApiError = error
      );
    }
  }

}
