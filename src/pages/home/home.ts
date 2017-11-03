import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps, GoogleMapsEvent, GoogleMapOptions } from '@ionic-native/google-maps';

import { ListaCamionesPage } from '../lista-camiones/lista-camiones';
import { ComentariosPage } from '../comentarios/comentarios';
import { FavoritosPage } from '../favoritos/favoritos';
import { HistorialPage } from '../historial/historial';
import { ConfiguracionPage } from '../configuracion/configuracion';
import { PremiumPage } from '../premium/premium';

//import { LineaAzulPage } from '../linea-azul/linea-azul';

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

  ChangePage(pag){
    //this.navCtrl.push(pag);

    switch(pag){

      case 1:
        this.navCtrl.push(ListaCamionesPage);
      break;
      case 2:
        this.navCtrl.push(FavoritosPage);
      break;
      case 3:
      this.navCtrl.push(HistorialPage);
      break;
      case 4:
      this.navCtrl.push(PremiumPage);
      break;
      case 5:
      this.navCtrl.push(ComentariosPage);
      break;
      case 6:
      this.navCtrl.push(ConfiguracionPage);
      break;
      case 7:
      //this.navCtrl.push(pag);
      break;
    }
  }

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

  InstertarKML(){
  let map = this.map;
  //var map = Plugin.google.maps.Map.getMap();
  //let map = google.Map.getMap();

  var ctaLayer = new google.maps.KmlLayer({
          url: 'https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/1A%20Bosques%20Finca%20Morelos.kml',
          map: map
        });
}

}
