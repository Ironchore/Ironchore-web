import { ApiError } from './../../../shared/models/api-error.model';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Award } from '../../../shared/models/award.model';
import { AwardService } from 'src/app/shared/services/award.service';

@Component({
  selector: 'app-award-create',
  templateUrl: './award-create.component.html',
  styleUrls: ['./award-create.component.css']
})
export class AwardCreateComponent implements OnInit {

  award: Award = new Award();
  ApiError: ApiError;

  constructor(private awardService: AwardService) { }

  ngOnInit() {
  }

  onSubmitCreate(awardForm: FormGroup): void {
    this.awardService.create(this.award)
      .subscribe(() => {
        awardForm.reset();
      }, (error: ApiError) => this.ApiError = error
      );
  }
}
