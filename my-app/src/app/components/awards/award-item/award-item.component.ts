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

  constructor(private awardService: AwardService, private router: Router) { }

  ngOnInit() {
  }

  onDeleteAward(): void {
    this.awardService.delete(this.award.id)
      .subscribe(() => {});
    this.router.navigate(['/awards']);
  }

}
