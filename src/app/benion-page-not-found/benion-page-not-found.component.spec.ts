import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenionPageNotFoundComponent } from './benion-page-not-found.component';

describe('BenionPageNotFoundComponent', () => {
  let component: BenionPageNotFoundComponent;
  let fixture: ComponentFixture<BenionPageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenionPageNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenionPageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
