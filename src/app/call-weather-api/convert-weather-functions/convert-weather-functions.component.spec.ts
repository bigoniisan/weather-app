import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertWeatherFunctionsComponent } from './convert-weather-functions.component';

describe('ConvertWeatherFunctionsComponent', () => {
  let component: ConvertWeatherFunctionsComponent;
  let fixture: ComponentFixture<ConvertWeatherFunctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvertWeatherFunctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertWeatherFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
