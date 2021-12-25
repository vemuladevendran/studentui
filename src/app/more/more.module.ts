import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MorePageRoutingModule } from './more-routing.module';

import { MorePage } from './more.page';
import { BonafideComponent } from './bonafide/bonafide.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MorePageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [MorePage, BonafideComponent]
})
export class MorePageModule {}
