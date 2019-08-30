import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuEventoPage } from './menu-evento.page';

const routes: Routes = [
  {
    path: '',
    component: MenuEventoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{
      path: '',
        component: MenuEventoPage
    }])
  ],
  declarations: [MenuEventoPage]
})
export class MenuEventoPageModule {}
