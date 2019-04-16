import {Component, OnInit} from '@angular/core';
import {ProviderService} from '../data/services/provider.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-tasks-by-id',
  templateUrl: './tasks-by-id.component.html',
  styleUrls: ['./tasks-by-id.component.css']
})
export class TasksByIdComponent implements OnInit {

  public id = 0;

  public task: any = {};

  constructor(
    private provider: ProviderService,
    private route: ActivatedRoute,
    private location: Location
  ) {
  }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'), null);

    if (this.id) {
      this.provider.getTaskDetail(this.id).then(res => {
        this.task = res;
      });
    }
  }

  navigateBack() {
    this.location.back();
  }

}
