import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatLngTuple, map, Map, tileLayer } from 'leaflet';

@Component({
  selector: 'map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent  implements OnInit{
@ViewChild('map',{static:true})
mapRef!:ElementRef;
map!:Map;
private readonly DEFAULT_LATLNG: LatLngTuple = [13.75, 21.62];
ngOnInit(): void {
  this.initializeMap();
}
initializeMap(){
  if(this.map) return;
  this.map = map(this.mapRef.nativeElement, {
    attributionControl: false
  }).setView(this.DEFAULT_LATLNG, 1);
  tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(this.map);
}
}
