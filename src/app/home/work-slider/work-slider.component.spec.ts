import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkSliderComponent } from './work-slider.component';

describe('WorkSliderComponent', () => {
  let component: WorkSliderComponent;
  let fixture: ComponentFixture<WorkSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
