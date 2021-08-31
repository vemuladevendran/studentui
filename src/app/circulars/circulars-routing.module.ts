import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CircularsPage } from './circulars.page';

const routes: Routes = [
  {
    path: '',
    component: CircularsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CircularsPageRoutingModule {}
