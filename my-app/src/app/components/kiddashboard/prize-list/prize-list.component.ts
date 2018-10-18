import { Component, OnInit } from '@angular/core';
import { Prize } from 'src/app/shared/models/prize.model';
import { PrizeService } from 'src/app/shared/services/prize.service';


@Component({
  selector: 'app-prize-list',
  templateUrl: './prize-list.component.html',
  styleUrls: ['./prize-list.component.css']
})
export class PrizeListComponent implements OnInit {
  prizes: Array<Prize> = [];

  constructor(private prizeService: PrizeService) { }

  ngOnInit() {
    this.prizeService.list()
    .subscribe(
      (prizes: Prize[]) => this.prizes = prizes
    );
  }

}
