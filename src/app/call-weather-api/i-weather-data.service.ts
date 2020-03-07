import { Injectable } from '@angular/core';

export interface IWeatherData {
  // coord: {
  //   lon: number,
  //   lat: number
  // },
  tempKelvin: number,
  tempCelsius: number,
  tempFahrenheit: number,
  // main: {
    // temp: number,
    // feels_like: number,
    // temp_min: number,
    // temp_max: number,
    // pressure: number,
    // humidity: number
  // },
  // visibility: number,
  // wind: {
  //   speed: number,
  //   deg: number,
  //   gust: number
  // },
  rain: number
  // timezone: number,
  // id: number,
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class IWeatherDataService {

  constructor() { }
}
