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
export class ChoreCreateComponent implements OnInit {

  chore: Chore = new Chore();
  ApiError: ApiError;

  constructor(private choreService: ChoreService) { }

  ngOnInit() {
  }

  onSubmitCreate(choreForm: FormGroup): void {
    this.choreService.create(this.chore)
      .subscribe(() => {
        choreForm.reset();
      }, (error: ApiError) => this.ApiError = error
      );
  }

}
