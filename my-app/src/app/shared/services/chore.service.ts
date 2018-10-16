import { ApiError } from "../models/api-error.model";
import { BaseApiService } from "./base-api.service";
import { Observable, Subject } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { Chore } from "./../models/chore.model";

@Injectable({
  providedIn: "root"
})
export class ChoreService extends BaseApiService {
  private static readonly USER_API = `${BaseApiService.BASE_API}/users`;
  private static readonly CHORE_API = `${BaseApiService.BASE_API}/chores`;

  private users: Array<User> = [];
  private usersSubject: Subject<Array<User>> = new Subject();

  private chores: Array<Chore> = [];
  private choresSubject: Subject<Array<Chore>> = new Subject();

  constructor(private http: HttpClient) {
    super();
  }

  list(): Observable<Array<Chore> | ApiError> {
    return this.http.get<Array<Chore>>(ChoreService.CHORE_API, BaseApiService.defaultOptions)
      .pipe(
        map((chores: Array<Chore>) => {
          chores = chores.map((chore)=>  Object.assign(new Chore(), chore));
          this.chores = chores;
          this.notifyUsersChanges();
          return chores;
        }),
        catchError(this.handleError)
      );
  }

  create(chore: Chore) {
    return this.http.post<Chore>(ChoreService.CHORE_API, chore, BaseApiService.defaultOptions)
      .pipe(
        map((chore: Chore) => Object.assign(new Chore(), chore)),
        catchError(this.handleError)
      );
  }


  private notifyUsersChanges(): void {
    this.choresSubject.next(this.chores);
  }
}


