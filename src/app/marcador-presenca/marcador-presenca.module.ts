import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarcadorPresencaPage } from './marcador-presenca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: MarcadorPresencaPage }])
  ],
  declarations: [MarcadorPresencaPage],
  exports: [MarcadorPresencaPage]
})
export class MarcadorPresencaPageModule {}
