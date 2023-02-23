import { Component ,OnInit} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NavItem } from 'src/app/_models/nav-item';
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
   //router!:Router;
  // navitem!:NavItem;product: Product | undefined;
    breadcrumb="";
 // Breadcrumb = '{name:"John", age:30, cars:["Ford", "BMW", "Fiat"]}';
  //bc=this.router;
  constructor(private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.activatedRoute.data.subscribe(d => {
      console.log(d['breadcrumb']); // ['home']
      this.breadcrumb=d['breadcrumb'];
    })
  }
  
}
