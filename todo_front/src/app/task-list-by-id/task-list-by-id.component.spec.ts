import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListByIdComponent } from './task-list-by-id.component';

describe('TaskListByIdComponent', () => {
  let component: TaskListByIdComponent;
  let fixture: ComponentFixture<TaskListByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskListByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
