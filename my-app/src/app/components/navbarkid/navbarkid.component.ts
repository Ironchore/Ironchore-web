import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../shared/services/sessions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbarkid',
  templateUrl: './navbarkid.component.html',
  styleUrls: ['./navbarkid.component.css']
})
export class NavbarkidComponent implements OnInit {

  constructor(private sessionService: SessionService, private router: Router) { }

  ngOnInit() {
  }

  onClickLogout(): void {
    this.sessionService.logout()
      .subscribe(() => {
        this.router.navigate(['/login']);
      });
  }
}
