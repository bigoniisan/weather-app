import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallWeatherApiComponent } from './call-weather-api.component';

describe('CallWeatherApiComponent', () => {
  let component: CallWeatherApiComponent;
  let fixture: ComponentFixture<CallWeatherApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallWeatherApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallWeatherApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
