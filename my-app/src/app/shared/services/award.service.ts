import { ApiError } from "../models/api-error.model";
import { BaseApiService } from "./base-api.service";
import { Observable, Subject } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Award } from "../models/award.model";


@Injectable({
  providedIn: "root"
})
export class AwardService extends BaseApiService {
  private static readonly AWARD_API = `${BaseApiService.BASE_API}/awards`;


  private awards: Array<Award> = [];
  private awardsSubject: Subject<Array<Award>> = new Subject();

  constructor(private http: HttpClient) {
    super();
  }

  list(): Observable<Array<Award> | ApiError> {
    return this.http.get<Array<Award>>(AwardService.AWARD_API, BaseApiService.defaultOptions)
      .pipe(
        map((awards: Array<Award>) => {
          awards = awards.map((award)=>  Object.assign(new Award(), award));
          this.awards = awards;
          this.notifyUsersChanges();
          return awards;
        }),
        catchError(this.handleError)
      );
  }

  create(award: Award) {
    return this.http.post<Award>(AwardService.AWARD_API, award, BaseApiService.defaultOptions)
      .pipe(
        map((award: Award) => Object.assign(new Award(), award)),
        catchError(this.handleError)
      );
  }

  private notifyUsersChanges(): void {
    this.awardsSubject.next(this.awards);
  }

}