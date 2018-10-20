import { PrizeService } from './../../../shared/services/prize.service';
import { Prize } from './../../../shared/models/prize.model';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prize-item',
  templateUrl: './prize-item.component.html',
  styleUrls: ['./prize-item.component.css']
})
export class PrizeItemComponent implements OnInit {

  @Input() prize: Prize = new Prize();

  constructor(private prizeService: PrizeService, private router: Router) { }

  ngOnInit() {
  }
  
  wonPrize(): void {
    this.prizeService.complete(this.prize.id)
      .subscribe(() => {});
    this.router.navigate(['/kiddashboard']);
  }
}
