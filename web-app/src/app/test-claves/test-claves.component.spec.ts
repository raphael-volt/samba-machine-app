import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestClavesComponent } from './test-claves.component';

describe('TestClavesComponent', () => {
  let component: TestClavesComponent;
  let fixture: ComponentFixture<TestClavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestClavesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestClavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
