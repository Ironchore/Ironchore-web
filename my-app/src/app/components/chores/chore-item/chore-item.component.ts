import { Chore } from './../../../shared/models/chore.model';
import { Component, OnInit , Input} from '@angular/core';
import { ChoreService } from 'src/app/shared/services/chore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chore-item',
  templateUrl: './chore-item.component.html',
  styleUrls: ['./chore-item.component.css']
})
export class ChoreItemComponent implements OnInit {

  @Input() chore: Chore = new Chore();

  constructor(private choreService: ChoreService, private router: Router) { }

  ngOnInit() {
  }

  onDeleteChore(): void {
    this.choreService.delete(this.chore.id)
      .subscribe(() => {});
    this.router.navigate(['/chores']);
  }

}
