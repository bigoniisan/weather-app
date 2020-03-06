import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convert-weather-functions',
  templateUrl: './convert-weather-functions.component.html',
  styleUrls: ['./convert-weather-functions.component.css']
})
export class ConvertWeatherFunctionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  convertKelvinToCelsius(temp: number): number {
    return temp - 273.15;
  }

  convertKelvinToFahrenheit(temp: number): number {
    return (temp - 273.15) * 9/5 + 32;
  }

}
