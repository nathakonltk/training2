import { TitleName,MemberModel } from './../../_models/index';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,FormControl, Validators} from '@angular/forms';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-member-keyin',
  templateUrl: './member-keyin.component.html',
  styleUrls: ['./member-keyin.component.scss'],
})
export class MemberKeyinComponent implements OnInit {
  titlename:TitleName[]=[
    {title_id:'01',title_name:'นาย'},
    {title_id:'02',title_name:'นาง'},
    {title_id:'03',title_name:'นางสาว'}
  ];
  form: FormGroup;
  //dataMember!:MemberModel[];
  // form = new FormGroup({
  //   first_name: new FormControl('',[Validators.required]),
  // });
  // form=this.fb.group({
  //   first_name: ['', Validators.required],
  // })
  constructor(
    private dateAdapter: DateAdapter<Date>,
    private fb:FormBuilder
  ){
    this.dateAdapter.setLocale('th'); //dd/MM/yyyy
    this.form = this.fb.group({
      title_id: ['', [Validators.required]],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      birth_date: ['', [Validators.required]],
      tel: ['', [Validators.required]],
      email: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    this.form.markAllAsTouched();
    
  }
}
