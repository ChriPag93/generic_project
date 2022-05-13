import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakelistComponent } from './fakelist.component';

describe('FakelistComponent', () => {
  let component: FakelistComponent;
  let fixture: ComponentFixture<FakelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FakelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
