import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CallGifApiComponent } from './call-gif-api/call-gif-api.component';
import { CallWeatherApiComponent } from './call-weather-api/call-weather-api.component';

@NgModule({
  declarations: [
    AppComponent,
    CallGifApiComponent,
    CallWeatherApiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
