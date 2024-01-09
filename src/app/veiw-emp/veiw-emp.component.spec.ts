import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiwEmpComponent } from './veiw-emp.component';

describe('VeiwEmpComponent', () => {
  let component: VeiwEmpComponent;
  let fixture: ComponentFixture<VeiwEmpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeiwEmpComponent]
    });
    fixture = TestBed.createComponent(VeiwEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
