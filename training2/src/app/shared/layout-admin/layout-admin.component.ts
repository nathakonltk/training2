import { Component, Output, ViewChild, EventEmitter, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
//import { MediaMatcher } from '@angular/cdk/layout';
@Component({
  selector: 'app-layout-admin',
  templateUrl: './layout-admin.component.html',
  styleUrls: ['./layout-admin.component.scss']
})
export class LayoutAdminComponent {
  //@Output() breadcrumbLayoutEvent=new EventEmitter<string>();
  breadcrumbs="";
  breadcrumdLayoutChange(val:string){  
    this.breadcrumbs=val;  
    //console.log("val:",val);
  }
  @ViewChild('main_menu') sidenav!: MatSidenav;
  toggleSideNav() {
    this.sidenav.toggle();
  }
  
  // private _mobileQueryListener: () => void;

  // mobileQuery: MediaQueryList;
  // constructor(
  //   private changeDetectorRef: ChangeDetectorRef,
  //   private media: MediaMatcher,
  // ) { 

  //   this.mobileQuery = this.media.matchMedia('(max-width: 1620px)');
  //   this._mobileQueryListener = () => changeDetectorRef.detectChanges();
  //   this.mobileQuery.addListener(this._mobileQueryListener);
  // }
  
  // ngOnDestroy(): void {
  //   // tslint:disable-next-line: deprecation
  //   this.mobileQuery.removeListener(this._mobileQueryListener);
  // }

  // ngAfterViewInit(): void {
  //   this.changeDetectorRef.detectChanges();
  // }
  
}
