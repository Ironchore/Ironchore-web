import { AwardService } from 'src/app/shared/services/award.service';
import { Component, OnInit } from '@angular/core';
import { Award } from '../../../shared/models/award.model';
@Component({
  selector: 'app-award-list',
  templateUrl: './award-list.component.html',
  styleUrls: ['./award-list.component.css']
})
export class AwardListComponent implements OnInit {

  awards: Array<Award> = [];

  constructor(private awardService: AwardService) { }

  ngOnInit() {
    this.awardService.list()
    .subscribe(
      (awards: Award[]) => this.awards = awards
    );
  }

}
