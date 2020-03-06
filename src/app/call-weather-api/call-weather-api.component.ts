import { Component, OnInit } from '@angular/core';

import { ConvertWeatherFunctionsComponent } from './convert-weather-functions/convert-weather-functions.component'

@Component({
  selector: 'app-call-weather-api',
  templateUrl: './call-weather-api.component.html',
  styleUrls: ['./call-weather-api.component.css']
})
export class CallWeatherApiComponent implements OnInit {

  private readonly apiKey: string = "207c35e3e049c4cc7ed85efaf5ffc7c6";
  private readonly url: string = "http://api.openweathermap.org/data/2.5/weather?q="

  constructor() { }

  ngOnInit() {
  }

  getWeather() {
    const locationTextHTMLInput: HTMLInputElement = document.getElementById("location-text") as HTMLInputElement;
    const locationText = locationTextHTMLInput.value;
    const url: string = this.url + locationText + "&APPID=" + this.apiKey;

    // in Kelvin
    let cityTemp: number = 0;

    fetch(url, {
      mode: 'cors'
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        const cwfc = new ConvertWeatherFunctionsComponent

        console.log(response);

        cityTemp = response.main.temp;
        
        console.log(cityTemp + " degrees Kelvin");
        console.log(cwfc.convertKelvinToCelsius(cityTemp) + " degrees Celsius");
        console.log(cwfc.convertKelvinToFahrenheit(cityTemp) + " degrees Fahrenheit");
      })
      .catch(function(response) {
        throw response.error;
      })
  }
  
  

  
  

}
