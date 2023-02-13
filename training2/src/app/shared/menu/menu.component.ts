import { Component } from '@angular/core';
import { NavItem } from '../../_models';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  navItems: NavItem[] = [

    {
      displayName: 'หน้าหลัก',
      disabled: true,
      iconName: 'home',
      route: '/admin',
      children: [
        
      ]
    },
    {
      displayName: 'ข้อมูลสมาชิก',
      disabled: true,
      iconName: 'perm_identity',
      route: '/admin/member',
      children: [
        
      ]
    },
    
  ];
}
