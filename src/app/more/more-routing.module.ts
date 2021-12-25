import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BonafideComponent } from './bonafide/bonafide.component';

import { MorePage } from './more.page';

const routes: Routes = [
  {
    path: '',
    component: MorePage
  },
  {
    path: 'bonafide',
    component: BonafideComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class MorePageRoutingModule {}
