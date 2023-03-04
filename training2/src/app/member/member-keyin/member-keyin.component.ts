import { TitleName,MemberModel,Tambon } from './../../_models/index';
import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup ,FormControl, Validators} from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { ProvAmpTamService } from '../../_service/index';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-member-keyin',
  templateUrl: './member-keyin.component.html',
  styleUrls: ['./member-keyin.component.scss'],
})
export class MemberKeyinComponent implements OnInit {
  tambon!:Tambon[];
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
    private fb:FormBuilder,
    private ProvAmpTamService: ProvAmpTamService,
    private http:HttpClient,
    // private dialog: MatDialog,
    // @Inject(MAT_DIALOG_DATA) public data: any,
    // public dialogRef: MatDialogRef<MemberKeyinComponent>,
  ){
    this.dateAdapter.setLocale('th-TH'); //dd/MM/yyyy
    this.form = this.fb.group({
      title_id: ['', [Validators.required]],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      birth_date: ['', [Validators.required]],
      age:[''],
      nationality:['', [Validators.required]],

      address: ['', [Validators.required]],
      tam_id: ['', [Validators.required]],
      amp_id: ['', [Validators.required]],
      tel: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
    });
  }
  
  ngOnInit(): void {
    this.form.markAllAsTouched();
    this.http.get("https://www.anapioficeandfire.com/api/books").subscribe(res=>{
      console.log('res',res);
    })
    //this.ProvAmpTamService.getTambon().subscribe((res)=>{
    //   console.log('res',res);
    //   //this.tambon=res;
    // })
   // console.log('tambon',this.tambon);
    
  }
}
