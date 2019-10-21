import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenionFormComponent } from './benion-form.component';

describe('BenionFormComponent', () => {
  let component: BenionFormComponent;
  let fixture: ComponentFixture<BenionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
