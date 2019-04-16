import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListByIdTasksComponent } from './task-list-by-id-tasks.component';

describe('TaskListByIdTasksComponent', () => {
  let component: TaskListByIdTasksComponent;
  let fixture: ComponentFixture<TaskListByIdTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskListByIdTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListByIdTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
