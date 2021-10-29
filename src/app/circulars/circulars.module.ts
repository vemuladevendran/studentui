import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CircularsPageRoutingModule } from './circulars-routing.module';

import { CircularsPage } from './circulars.page';
import { CircularLoaderComponent } from './circular-loader/circular-loader.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CircularsPageRoutingModule
  ],
  declarations: [CircularsPage, CircularLoaderComponent]
})
export class CircularsPageModule {}
