import { ApiError } from "../models/api-error.model";
import { BaseApiService } from "./base-api.service";
import { Observable, Subject } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Prize } from './../models/prize.model';


@Injectable({
  providedIn: 'root'
})
export class PrizeService extends BaseApiService {
  private static readonly PRIZE_API = `${BaseApiService.BASE_API}/prize`;

  private prizes: Array<Prize> = [];
  private prizesSubject: Subject<Array<Prize>> = new Subject();

  constructor(private http: HttpClient) {
    super();
  }

  list(): Observable<Array<Prize> | ApiError> {
    return this.http.get<Array<Prize>>(PrizeService.PRIZE_API, BaseApiService.defaultOptions)
      .pipe(
        map((prizes: Array<Prize>) => {
          prizes = prizes.map((prize)=>  Object.assign(new Prize(), prize));
          this.prizes = prizes;
          this.notifyUsersChanges();
          return prizes;
        }),
        catchError(this.handleError)
      );
  }

  private notifyUsersChanges(): void {
    this.prizesSubject.next(this.prizes);
  }
}
