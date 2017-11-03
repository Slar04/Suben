import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, 
		     MenuController, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps, GoogleMapsEvent, GoogleMapOptions } from '@ionic-native/google-maps';

import { HomePage } from '../home/home';

//import * as homePage from '../home/home';

/**
 * Generated class for the LineaAzulPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 declare var google;

@IonicPage()
@Component({
  selector: 'page-linea-azul',
  templateUrl: 'linea-azul.html',
})
export class LineaAzulPage {

	@ViewChild('map') mapElement: ElementRef;
 	map: any;

  constructor(public navCtrl: NavController/*, public homePage: HomePage*/, public navParams: NavParams, public menuCtrl: MenuController,public alertCtrl: AlertController, private googleMaps: GoogleMaps) {  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LineaAzulPage');
   //this.loadMap();
  }

  presentAlert() {
    const alert = this.alertCtrl.create({
      title: 'Low battery',
      subTitle: '10% of battery remaining',
      buttons: ['Dismiss']
    });
    alert.present();
  }

 InstertarKML(map){
  //var map = this.map;
  //var map = Plugin.google.maps.Map.getMap();
  //let map = google.Map.getMap();

  var ctaLayer = new google.maps.KmlLayer({
          url: 'https://raw.githubusercontent.com/Slar04/Departamento-de-Sistemas-/master/1A%20Bosques%20Finca%20Morelos.kml',
          map: map
        });
}

 MostrarKML(KML){
    this.navCtrl.popToRoot();
    this.menuCtrl.close();

    switch(KML){
    	case "5a": /*línea 5a*/
    		//this.presentAlert();
        var map = this.map;
    		this.InstertarKML(map);
    	break;
    	case "uni":/*universitaria*/

    	break;
        case "vallet": /*valle de juarez, ramal tierra n.*/
    	
    	break;
       	case "valler": /*valle de juarez, ramal riveras*/
    	
    	break;
    	case "ps": /*poniente sur*/
    	
    	break;
    	case "ja": /*juarez aeropuerto*/
    	
    	break;
    }
  }


}
