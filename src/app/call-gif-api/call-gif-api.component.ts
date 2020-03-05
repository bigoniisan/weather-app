import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call-gif-api',
  templateUrl: './call-gif-api.component.html',
  styleUrls: ['./call-gif-api.component.css']
})
export class CallGifApiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  fetchImage() {
    const img = document.querySelector('img');
    const searchTextHTMLInput = document.getElementById("search-text") as HTMLInputElement;
    const searchText = searchTextHTMLInput.value;

    fetch('https://api.giphy.com/v1/gifs/translate?api_key=vF1SJfxG4au3llKLfXrwp9bKe1dSaOR5&s=' + searchText, {mode: 'cors'})
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        img.src = response.data.images.original.url;
      })
      .catch(function(response) {
        console.log("No images of that description found. But have an Emilia instead!");
        img.src = "https://vignette.wikia.nocookie.net/rezero/images/c/c0/Emilia_Anime_2.png/revision/latest?cb=20160408203829";
      })
  }
}
