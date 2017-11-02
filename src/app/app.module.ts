import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListaCamionesPage } from '../pages/lista-camiones/lista-camiones';
import { ComentariosPage } from '../pages/comentarios/comentarios';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { HistorialPage } from '../pages/historial/historial';
import { ConfiguracionPage } from '../pages/configuracion/configuracion';
import { PremiumPage } from '../pages/premium/premium';

import { LineaAmarillaPage } from '../pages/linea-amarilla/linea-amarilla';
import { LineaAzulPage } from '../pages/linea-azul/linea-azul';
import { LineaCafePage } from '../pages/linea-cafe/linea-cafe';
import { LineaRojaPage } from '../pages/linea-roja/linea-roja';
import { LineaVerdePage } from '../pages/linea-verde/linea-verde';


import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps, GoogleMapsEvent, GoogleMapOptions } from '@ionic-native/google-maps';

import { Firebase } from '@ionic-native/firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';


/*La variable firebaseConfig es la que inicializamos arriba*/
/*En esta parte se realiza las configuraciones 
en en las paginas de developerfacebook y firebase*/
export const firebaseConfig={};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListaCamionesPage,
    ComentariosPage,
    FavoritosPage,
    HistorialPage,
    ConfiguracionPage,
    PremiumPage,
    LineaAmarillaPage,
    LineaAzulPage,
    LineaCafePage,
    LineaRojaPage,
    LineaVerdePage 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig), 
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListaCamionesPage,
    ComentariosPage,
    FavoritosPage,
    HistorialPage,
    ConfiguracionPage,
    PremiumPage,
    LineaAmarillaPage,
    LineaAzulPage,
    LineaCafePage,
    LineaRojaPage,
    LineaVerdePage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    GoogleMaps,
    Firebase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
