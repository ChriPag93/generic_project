import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestprovaComponent } from './testprova.component';

describe('TestprovaComponent', () => {
  let component: TestprovaComponent;
  let fixture: ComponentFixture<TestprovaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestprovaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestprovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
