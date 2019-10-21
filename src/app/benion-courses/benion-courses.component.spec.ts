import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenionCoursesComponent } from './benion-courses.component';

describe('BenionCoursesComponent', () => {
  let component: BenionCoursesComponent;
  let fixture: ComponentFixture<BenionCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenionCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenionCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
