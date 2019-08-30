import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CompraFinalizadaPage } from './compra-finalizada.page';

const routes: Routes = [
  {
    path: '',
    component: CompraFinalizadaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CompraFinalizadaPage]
})
export class CompraFinalizadaPageModule {}
