import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestCompComponent } from './invest-comp.component';

describe('InvestCompComponent', () => {
  let component: InvestCompComponent;
  let fixture: ComponentFixture<InvestCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
