import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth/auth.guard';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'forgetpassword',
    loadChildren: () => import('./forgetpassword/forgetpassword.module').then(m => m.ForgetpasswordPageModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'setpassword',
    loadChildren: () => import('./setpassword/setpassword.module').then(m => m.SetpasswordPageModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'view-report/:id',
    loadChildren: () => import('./view-reports/view-reports.module').then( m => m.ViewReportsPageModule)
    // canActivate: [AuthGuard]
  },
  {
    path: 'update-password',
    loadChildren: () => import('./update-password/update-password.module').then( m => m.UpdatePasswordPageModule)
    // canActivate: [AuthGuard]

  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
