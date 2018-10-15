import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { SessionService } from '../../shared/services/sessions.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faCoffee = faCoffee;

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
