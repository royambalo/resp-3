import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardcompComponent } from './cardcomp.component';

describe('CardcompComponent', () => {
  let component: CardcompComponent;
  let fixture: ComponentFixture<CardcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
