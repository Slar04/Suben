import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps, GoogleMapsEvent, GoogleMapOptions } from '@ionic-native/google-maps';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, 
  	public geolocation: Geolocation, 
    private googleMaps: GoogleMaps) {  }

  ionViewDidLoad(){
    this.loadMap();
  }

  loadMap(){

   /* this.geolocation.getCurrentPosition().then((position) =>{*/

   let latLng = new google.maps.LatLng(31.7333300, -106.4833300);
 
    let mapOptions = {
      center: latLng,
      zoom: 15/*,
      mapTypeId: google.maps.MapTypeId.ROADMAP*/
    }
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  } /*, (err) => {
      console.log(err);
    });
 
  }*/

}
