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
      iconName: 'fas fa-user',
      route: '/admin',
      children: [
        
      ]
    },
    {
      displayName: 'ข้อมูลเจ้าของ',
      disabled: true,
      iconName: 'fas fa-user',
      route: '/admin/member',
      children: [
        
      ]
    },
    
  ];
}
