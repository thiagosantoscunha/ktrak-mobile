import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'pages',
    component: TabsPage,
    children: [
      // {
      //   path: 'login',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () =>
      //         import('../login/login.module').then(m => m.LoginPageModule)
      //     }
      //   ]
      // },
      {
        path: 'dashboard',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../dashboard/dashboard.module').then(m => m.DashboardPageModule)
          }
        ]
      },
      {
        path: 'curso',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../cursos/cursos.module').then(m => m.CursosPageModule)
          }
        ]
      },
      {
        path: 'qrcode',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../qrcode/qrcode.module').then(m => m.QrcodePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/pages/dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/pages/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
