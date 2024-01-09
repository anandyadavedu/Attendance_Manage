import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-veiw-emp',
  templateUrl: './veiw-emp.component.html',
  styleUrls: ['./veiw-emp.component.css']
})
export class VeiwEmpComponent implements OnInit {
 
        // public registrationForm=new UntypedFormGroup({})

        EmpDetailList:any=[];
        dataItem:any;
        emp: any;
      


        constructor(
          private service: SharedService,
          private router: Router,
          private formBuilder: UntypedFormBuilder,
          private toastr:ToastrService  ) {}

      ngOnInit(): void {

        // this.refresh(this.dataItem);
        this.emp = history.state;
      }

      GoEmpDetail(){
        this.router.navigate(['emp-detail']);
      }

      // refresh(dataItem:any){
      //   this.service.getEmployeeDetailById(dataItem).subscribe((data)=>{
      //     this.EmpDetailList=data;
      //   })
      // }

 

}
