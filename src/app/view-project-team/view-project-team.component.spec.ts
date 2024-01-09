import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProjectTeamComponent } from './view-project-team.component';

describe('ViewProjectTeamComponent', () => {
  let component: ViewProjectTeamComponent;
  let fixture: ComponentFixture<ViewProjectTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewProjectTeamComponent]
    });
    fixture = TestBed.createComponent(ViewProjectTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
