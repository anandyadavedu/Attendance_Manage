import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit  {

      public projectForm=new UntypedFormGroup({})

      public submitted = false;

      dataItem:any;
      priority:any=[];
      Id:any;
   
      Description:any;
      Project_Name: any;
      Project_Priority: any;
      Start_Date: any;
      End_Date: any;
      Technology:any;
      update: any;
      





      constructor(
        private service: SharedService,
        private router: Router,
        private formBuilder: UntypedFormBuilder,
        private toastr:ToastrService  ) {}

      
      ngOnInit(): void {

        this.projectForm = this.formBuilder.group({
          Project_Name: ['', [Validators.required]],
          Project_Priority: ['',[Validators.required]],
          Start_Date: ['', [Validators.required]],
          End_Date: ['', [Validators.required]],
          Technology: ['', [Validators.required]],
          Description: ['', [Validators.required]],
        
      
      });

      this.dataItem = history.state;
      this.Id=this.dataItem.Id;
      this.Project_Name=this.dataItem.Project_Name; 
      this.Project_Priority=this.dataItem.Project_Priority;
      this.Start_Date=this.dataItem.Start_Date;
      this.End_Date=this.dataItem.End_Date;
      this.Technology=this.dataItem.Technology;
      this.Description=this.dataItem.Description;

      this.GetPriority();

      
    }

  get formControl(){
      return this.projectForm.controls;
  }

  addProject(){
        this.submitted=true;

        const formData=new FormData();
        formData.append('Project_Name',this.Project_Name);
        formData.append('Project_Priority',this.Project_Priority);
        formData.append('Start_Date',this.Start_Date);
        formData.append('End_Date',this.End_Date);
        formData.append('Technology',this.Technology);
        formData.append('Description',this.Description);

        this.service.InsertionProject(formData).subscribe((res) => {
            if (res =='Inserted Successfully') {
              this.toastr.success('successfully Added','');
              this.router.navigate(['project']);
            } else {
              this.router.navigate(['login']);             
            }
        });
  }


    UpdateProject(){

          this.update=true;

          if(this.projectForm.valid){

            const formData=new FormData();

            formData.append('Id',this.Id);
            formData.append('Project_Name',this.Project_Name);
            formData.append('Project_Priority',this.Project_Priority);
            formData.append('Start_Date',this.Start_Date);
            formData.append('End_Date',this.End_Date);
            formData.append('Technology',this.Technology);
            formData.append('Description',this.Description);
        

            this.service.editProject(formData).subscribe(res =>{
              if (res == 'Update Successfully') {
                this.toastr.success('successfully Updated','');
                this.router.navigate(['project']);
              }
              else{
                this.router.navigate(['home']);
              }
            });

          }

    }
    GetPriority(){
          this.service.getPriority().subscribe(res=>{
            this.priority=res;
          });
    }

    ProjectDetail(){
      this.router.navigate(['project']);
    }
 

}



