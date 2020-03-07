import { TestBed } from '@angular/core/testing';

import { IWeatherDataService } from './i-weather-data.service';

describe('IWeatherDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IWeatherDataService = TestBed.get(IWeatherDataService);
    expect(service).toBeTruthy();
  });
});
