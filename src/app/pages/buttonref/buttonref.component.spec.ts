import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonrefComponent } from './buttonref.component';

describe('ButtonrefComponent', () => {
  let component: ButtonrefComponent;
  let fixture: ComponentFixture<ButtonrefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonrefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonrefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
