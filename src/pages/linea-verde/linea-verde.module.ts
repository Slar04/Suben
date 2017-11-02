import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LineaVerdePage } from './linea-verde';

@NgModule({
  declarations: [
    LineaVerdePage,
  ],
  imports: [
    IonicPageModule.forChild(LineaVerdePage),
  ],
})
export class LineaVerdePageModule {}
