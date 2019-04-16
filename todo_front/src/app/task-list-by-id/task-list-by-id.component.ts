import { Component, OnInit } from '@angular/core';
import { ITaskList } from '../data/model';
import { ProviderService } from '../data/services/provider.service';
import { Location } from '@angular/common';
import { identifierModuleUrl } from '@angular/compiler';
import { ActivatedRoute } from '@angular/router';
import { empty } from 'rxjs';


@Component({
  selector: 'app-task-list-by-id',
  templateUrl: './task-list-by-id.component.html',
  styleUrls: ['./task-list-by-id.component.css']
})
export class TaskListByIdComponent implements OnInit {

  public id = 0;

  public taskList: any = {};

  constructor(
    private provider: ProviderService,
    private router: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {

    this.id = parseInt(this.router.snapshot.paramMap.get('id'), null);

    if (this.id) {
      this.provider.getTaskListDetail(this.id).then(res => {
        this.taskList = res;
      });
    }
  }

  navigateBack() {
    this.location.back();
  }

}
