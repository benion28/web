import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenionDirectivesComponent } from './benion-directives.component';

describe('BenionDirectivesComponent', () => {
  let component: BenionDirectivesComponent;
  let fixture: ComponentFixture<BenionDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenionDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenionDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
