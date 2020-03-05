import { Component, OnInit } from '@angular/core';

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

    fetch(url, {
      mode: 'cors'
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(response) {
        console.log("No city of that name found.");
      })
  }

}
