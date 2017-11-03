import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { LineaAmarillaPage } from '../linea-amarilla/linea-amarilla';
import { LineaAzulPage } from '../linea-azul/linea-azul';
import { LineaCafePage } from '../linea-cafe/linea-cafe';
import { LineaRojaPage } from '../linea-roja/linea-roja';
import { LineaVerdePage } from '../linea-verde/linea-verde';

/**
 * Generated class for the ListaCamionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-camiones',
  templateUrl: 'lista-camiones.html',
})
export class ListaCamionesPage {

  constructor(public navCtrl: NavController,
   public navParams: NavParams, 
   public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaCamionesPage');
  }

 ChangePage(pag){
   // this.navCtrl.push(LineaAzulPage);

switch(pag){
  case 1:
    this.navCtrl.push(LineaAzulPage);
  break;
  case 2:
    this.navCtrl.push(LineaRojaPage);
  break;
  case 3:
  this.navCtrl.push(LineaAmarillaPage);
  break;
  case 4:
  this.navCtrl.push(LineaVerdePage);
  break;
  case 5:
  this.navCtrl.push(LineaCafePage);
  break;
}

}
  
}
