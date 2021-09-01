import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { UpdatePasswordPageRoutingModule } from './update-password-routing.module';

import { UpdatePasswordPage } from './update-password.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    UpdatePasswordPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [UpdatePasswordPage]
})
export class UpdatePasswordPageModule {}
