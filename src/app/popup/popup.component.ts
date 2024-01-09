import { Component, OnInit,Inject } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  public projectTeamForm=new UntypedFormGroup({})

  developer:any=[];
  manager:any=[];
  // Employee_ID:any
  // priority: any;
  // Developer:any;
  // dataIten:any;
  // Manager:any;
  submitted: any;
  // toastr: any;
  // AssignDate: any;
  // IsActive: any;
  // CreatedDate: any;
  // CreatedBy: any;
  // EmployeeId: any;
  // ProjectId: any;
  dataItem: any;
  Id: any;
  // selectedId: any;
  // Employee_Id: any;
  // Employee_Id1: any;
  Manager_Id:any;
  Developer_Id:any;

  // projectForm: any;

  constructor(private service: SharedService, private router: Router,
    private formBuilder: UntypedFormBuilder,private toastr:ToastrService,
    public dialogRef:MatDialogRef<PopupComponent>,@Inject(MAT_DIALOG_DATA) public data:{Id:any}){}


  ngOnInit(): void {
    this.projectTeamForm = this.formBuilder.group({
      ProjectId: [''],
      // Employee_Id: [''],
      // CreatedBy: [''],
      // Id:[''],
      Developer_Id:[''],
      Manager_Id:['']

    });

    this.service.getdeveloper().subscribe((res: any)=>{
      this.developer=res;
      console.log(this.developer)
    });
    this.service.getmanager().subscribe((res:any)=>{
      this.manager=res;
      console.log(this.manager)

    });


    // this.GetDeveloper();
    // this.GetManager();


    this.dataItem = history.state;
    this.Id=this.dataItem.Id;
    // this.Id=this.dataItem.Id; 
    // this.EmployeeId=this.dataItem.EmployeeId;
    // this.CreatedBy=this.dataItem.CreatedBy;

  }
  get formControl(){
    return this.projectTeamForm.controls;
}




  // GetDeveloper(){
  //   this.service.getdeveloper().subscribe((res: any)=>{
  //     this.developer=res;
  //     // console.log(this.priority);


  //   });
  // }


    // GetManager(){
    //   this.service.getmanager().subscribe((res:any)=>{
    //     this.manager=res;

    //   });
    // }

    Cancel(){
      this.router.navigate(['project']);
    }


    AddProjectTeam(Id:any){debugger
      this.submitted=true;

      const formData=new FormData();

      formData.append('ProjectId',this.data.Id);
      formData.append('EmployeeId',this.Developer_Id);
      formData.append('CreatedBy',this.Manager_Id);

      this.service.InsertionProjectTeam(formData).subscribe((res) => {
          if (res =='Inserted Successfully') {
            this.toastr.success('successfully Added','');
            this.router.navigate(['project']);
          } else {
            this.router.navigate(['login']);
            
          }
      });
    }
  

 
}


