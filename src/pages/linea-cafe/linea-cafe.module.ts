import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LineaCafePage } from './linea-cafe';

@NgModule({
  declarations: [
    LineaCafePage,
  ],
  imports: [
    IonicPageModule.forChild(LineaCafePage),
  ],
})
export class LineaCafePageModule {}
