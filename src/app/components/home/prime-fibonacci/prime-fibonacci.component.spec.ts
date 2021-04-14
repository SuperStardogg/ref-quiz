import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeFibonacciComponent } from './prime-fibonacci.component';

describe('PrimeFibonacciComponent', () => {
  let component: PrimeFibonacciComponent;
  let fixture: ComponentFixture<PrimeFibonacciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeFibonacciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeFibonacciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
