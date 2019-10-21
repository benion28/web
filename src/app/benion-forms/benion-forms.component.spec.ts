import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenionFormsComponent } from './benion-forms.component';

describe('BenionFormsComponent', () => {
  let component: BenionFormsComponent;
  let fixture: ComponentFixture<BenionFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenionFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenionFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
