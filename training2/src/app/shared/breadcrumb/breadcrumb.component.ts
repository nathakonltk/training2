import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from 'src/app/_models/nav-item';
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  router!:Router;
  navitem!:NavItem;
  myJSON = '{name:"John", age:30, cars:["Ford", "BMW", "Fiat"]}';
  //bc=this.router;
  ngOnInit() {
    //console.log(bc);
  }
  
}
