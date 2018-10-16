import { ChoreService } from 'src/app/shared/services/chore.service';
import { Component, OnInit } from '@angular/core';
import { Chore } from '../../../shared/models/chore.model';
@Component({
  selector: 'app-chore-list',
  templateUrl: './chore-list.component.html',
  styleUrls: ['./chore-list.component.css']
})
export class ChoreListComponent implements OnInit {

  chores: Array<Chore> = [];

  constructor(private choreService: ChoreService) { }

  ngOnInit() {
    this.choreService.list()
    .subscribe(
      (chores: Chore[]) => this.chores = chores
    );
  }

}
