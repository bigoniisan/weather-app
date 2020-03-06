import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-call-weather-api',
  templateUrl: './call-weather-api.component.html',
  styleUrls: ['./call-weather-api.component.css']
})
export class CallWeatherApiComponent implements OnInit {

  private readonly apiKey: string = "207c35e3e049c4cc7ed85efaf5ffc7c6";
  private readonly url: string = "http://api.openweathermap.org/data/2.5/weather?q="

  private data: object;

  constructor() { }

  ngOnInit() {
  }

  async getWeather() {
    // this.processedData = this.processData(this.getWeatherData());
    console.log(await this.getWeatherData());
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

  processData(incomingData: object) {
    let data: object = {};
    return null;
    // const cwfc = new ConvertWeatherFunctionsComponent;
    // console.log(cityTemp + " degrees Kelvin");
    // console.log(cwfc.convertKelvinToCelsius(cityTemp) + " degrees Celsius");
    // console.log(cwfc.convertKelvinToFahrenheit(cityTemp) + " degrees Fahrenheit");
  }







}
