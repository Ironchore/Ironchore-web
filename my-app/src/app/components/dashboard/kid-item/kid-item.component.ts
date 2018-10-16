import { Router } from '@angular/router';
import {  UserService } from './../../../shared/services/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';


@Component({
  selector: 'app-kid-item',
  templateUrl: './kid-item.component.html',
  styleUrls: ['./kid-item.component.css']
})
export class KidItemComponent implements OnInit {
  @Input() user: User = new User();

  constructor(private UserService: UserService, private router: Router) { }

  ngOnInit() {
  }


}
