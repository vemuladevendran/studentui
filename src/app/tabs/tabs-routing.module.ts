import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'circulars',
        loadChildren: () => import('../circulars/circulars.module').then( m => m.CircularsPageModule)
      },
      {
        path: 'reports',
        loadChildren: () => import('../reports/reports.module').then( m => m.ReportsPageModule)
      },
      {
        path: 'marks',
        loadChildren: () => import('../marks/marks.module').then( m => m.MarksPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/circulars',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/circulars',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
