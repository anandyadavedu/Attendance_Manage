import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDetailComponent } from './emp-detail.component';

describe('EmpDetailComponent', () => {
  let component: EmpDetailComponent;
  let fixture: ComponentFixture<EmpDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpDetailComponent]
    });
    fixture = TestBed.createComponent(EmpDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
