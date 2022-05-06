import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamGeneraterComponent } from './team-generater.component';

describe('TeamGeneraterComponent', () => {
  let component: TeamGeneraterComponent;
  let fixture: ComponentFixture<TeamGeneraterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamGeneraterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamGeneraterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
