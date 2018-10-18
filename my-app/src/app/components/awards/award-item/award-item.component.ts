import { Award } from './../../../shared/models/award.model';
import { Component, OnInit , Input} from '@angular/core';
import { AwardService } from 'src/app/shared/services/award.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-award-item',
  templateUrl: './award-item.component.html',
  styleUrls: ['./award-item.component.css']
})
export class AwardItemComponent implements OnInit {

  @Input() award: Award = new Award();

  constructor(private AwardService: AwardService, private Router: Router) { }

  ngOnInit() {
  }
}
