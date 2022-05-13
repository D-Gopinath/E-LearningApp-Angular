import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCourseByTypeComponent } from './view-course-by-type.component';

describe('ViewCourseByTypeComponent', () => {
  let component: ViewCourseByTypeComponent;
  let fixture: ComponentFixture<ViewCourseByTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCourseByTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCourseByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
