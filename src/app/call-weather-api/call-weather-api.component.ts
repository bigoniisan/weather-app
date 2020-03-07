import {Component, OnInit} from '@angular/core';
import { IWeatherData } from './i-weather-data.service';
import { ConvertWeatherFunctionsComponent } from './convert-weather-functions/convert-weather-functions.component';

@Component({
  selector: 'app-call-weather-api',
  templateUrl: './call-weather-api.component.html',
  styleUrls: ['./call-weather-api.component.css']
})

export class CallWeatherApiComponent implements OnInit {

  private readonly apiKey: string = "207c35e3e049c4cc7ed85efaf5ffc7c6";
  private readonly url: string = "http://api.openweathermap.org/data/2.5/weather?q="

  private data: IWeatherData;

  constructor() { }

  ngOnInit() {
  }

  async getWeather() {
    this.data = this.processData(await this.getWeatherData());
    console.log(this.data);
  }

  async getWeatherData() {
    const locationTextHTMLInput: HTMLInputElement = document.getElementById("location-text") as HTMLInputElement;
    const locationText = locationTextHTMLInput.value;
    const url: string = this.url + locationText + "&APPID=" + this.apiKey;

    try {
      const response = await fetch(url, {mode: 'cors'});
      return await response.json();
    } catch (err) {
      console.log(err);
    }
  }

  processData(incomingData) {
    const cwfc = new ConvertWeatherFunctionsComponent;
    const temp = incomingData.main.temp;
    let data: IWeatherData = {
      tempKelvin: temp,
      tempCelsius: cwfc.convertKelvinToCelsius(temp),
      tempFahrenheit: cwfc.convertKelvinToFahrenheit(temp),
      name: incomingData.name,
      rain: incomingData.rain
    };
    return data;
  }
}
