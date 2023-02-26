import { TitleName,MemberModel } from './../../_models/index';
import { Component } from '@angular/core';

@Component({
  selector: 'app-member-keyin',
  templateUrl: './member-keyin.component.html',
  styleUrls: ['./member-keyin.component.scss']
})
export class MemberKeyinComponent {
  titlename:TitleName[]=[
    {title_id:'01',title_name:'นาย'},
    {title_id:'02',title_name:'นาง'},
    {title_id:'03',title_name:'นางสาว'}
  ];
  dataMember!:MemberModel[];

}
