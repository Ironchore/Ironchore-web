import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user.model';
import { ApiError } from '../../../shared/models/api-error.model';

@Component({
  selector: 'app-kid-list',
  templateUrl: './kid-list.component.html',
  styleUrls: ['./kid-list.component.css']
})
export class KidListComponent implements OnInit {
  users: Array<User> = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.list()
    .subscribe(
      (users: User[]) => this.users = users
    );
  }

}
