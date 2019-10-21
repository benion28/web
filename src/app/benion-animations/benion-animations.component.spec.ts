import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenionAnimationsComponent } from './benion-animations.component';

describe('BenionAnimationsComponent', () => {
  let component: BenionAnimationsComponent;
  let fixture: ComponentFixture<BenionAnimationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenionAnimationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenionAnimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
