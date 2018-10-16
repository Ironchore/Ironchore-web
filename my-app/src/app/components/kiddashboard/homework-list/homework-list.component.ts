import { Component, OnInit } from '@angular/core';
import { Homework } from 'src/app/shared/models/homework.model';
import { HomeworkService } from 'src/app/shared/services/homework.service';

@Component({
  selector: 'app-homework-list',
  templateUrl: './homework-list.component.html',
  styleUrls: ['./homework-list.component.css']
})
export class HomeworkListComponent implements OnInit {

  homeworks: Array<Homework> = [];

  constructor(private homeworkService: HomeworkService) { }

  ngOnInit() {
    this.homeworkService.list()
    .subscribe(
      (homeworks: Homework[]) => this.homeworks = homeworks
    );
  }
}
