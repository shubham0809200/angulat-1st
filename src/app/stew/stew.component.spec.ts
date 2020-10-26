import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StewComponent } from './stew.component';

describe('StewComponent', () => {
  let component: StewComponent;
  let fixture: ComponentFixture<StewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
