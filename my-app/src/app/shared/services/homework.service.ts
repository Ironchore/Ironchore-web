import { ApiError } from "../models/api-error.model";
import { BaseApiService } from "./base-api.service";
import { Observable, Subject } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Homework } from "../models/homework.model";

@Injectable({
  providedIn: 'root'
})
export class HomeworkService extends BaseApiService{

  private static readonly HOMEWORK_API = `${BaseApiService.BASE_API}/homework`;

  private homeworks: Array<Homework> = [];
  private homeworksSubject: Subject<Array<Homework>> = new Subject();

  constructor(private http: HttpClient) {
    super();
  }

  list(): Observable<Array<Homework> | ApiError> {
    return this.http.get<Array<Homework>>(HomeworkService.HOMEWORK_API, BaseApiService.defaultOptions)
      .pipe(
        map((homeworks: Array<Homework>) => {
          homeworks = homeworks.map((homework)=>  Object.assign(new Homework(), homework));
          this.homeworks = homeworks;
          this.notifyUsersChanges();
          return homeworks;
        }),
        catchError(this.handleError)
      );
  }

  private notifyUsersChanges(): void {
    this.homeworksSubject.next(this.homeworks);
  }
}
