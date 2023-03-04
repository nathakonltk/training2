import { MemberKeyinComponent } from './member/member-keyin/member-keyin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutAdminComponent } from './shared/layout-admin/layout-admin.component';
const routes: Routes = [
  {
    path: 'admin/member',
    data: { breadcrumb: 'จัดการข้อมูลสมาชิก'},
    component: MemberKeyinComponent
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
