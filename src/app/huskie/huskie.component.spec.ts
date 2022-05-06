import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuskieComponent } from './huskie.component';

describe('HuskieComponent', () => {
  let component: HuskieComponent;
  let fixture: ComponentFixture<HuskieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuskieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuskieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
