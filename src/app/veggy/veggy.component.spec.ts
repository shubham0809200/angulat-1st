import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeggyComponent } from './veggy.component';

describe('VeggyComponent', () => {
  let component: VeggyComponent;
  let fixture: ComponentFixture<VeggyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeggyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeggyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
