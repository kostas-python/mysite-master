import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {

  map: google.maps.Map | undefined;

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

  initMap(): void {
    const mapElement = document.getElementById('map');
    if (mapElement instanceof HTMLElement) {
      this.map = new google.maps.Map(mapElement, {
        center: { lat: 51.505026876632826, lng: -0.13693994430669737 },
        zoom: 8
      });

      // Example: Add a marker
      new google.maps.Marker({
        position: { lat: 51.505, lng: -0.09 },
        map: this.map,
        title: 'Marker Title'
      });
    } else {
      console.error('Error: Map element not found or is not an HTMLElement.');
    }
  }
}
