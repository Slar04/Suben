import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaCamionesPage } from './lista-camiones';

@NgModule({
  declarations: [
    ListaCamionesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaCamionesPage),
  ],
})
export class ListaCamionesPageModule {}
