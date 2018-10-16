import { BaseApiService } from './base-api.service';
import { User } from './../models/user.model';
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { ApiError } from '../models/api-error.model';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseApiService {

  private static readonly USER_API = `${BaseApiService.BASE_API}/users`;

  private users: Array<User> = [];
  private usersSubject: Subject<Array<User>> = new Subject();

  constructor(private http: HttpClient) {
    super();
  }

  list(): Observable<Array<User> | ApiError> {
    return this.http.get<Array<User>>(UserService.USER_API, BaseApiService.defaultOptions)
      .pipe(
        map((users: Array<User>) => {
          users = users.map((user)=>  Object.assign(new User(), user));
          this.users = users;
          this.notifyUsersChanges();
          return users;
        }),
        catchError(this.handleError)
      );
  }

  create(user: User) {
    return this.http.post<User>(UserService.USER_API, user, BaseApiService.defaultOptions)
      .pipe(
        map((user: User) => Object.assign(new User(), user)),
        catchError(this.handleError)
      );
  }

  private notifyUsersChanges(): void {
    this.usersSubject.next(this.users);
  }

}