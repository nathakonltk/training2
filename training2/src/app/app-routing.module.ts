import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutAdminComponent } from './shared/layout-admin/layout-admin.component';
const routes: Routes = [
  {
    path: 'admin',
    data: {
      breadcrumb: 'หน้าหลัก'
    },
    component: LayoutAdminComponent,
  },
  {
    path: '**',
    redirectTo: '/admin'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
