import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenionFirebaseComponent } from './benion-firebase.component';

describe('BenionFirebaseComponent', () => {
  let component: BenionFirebaseComponent;
  let fixture: ComponentFixture<BenionFirebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenionFirebaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenionFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
