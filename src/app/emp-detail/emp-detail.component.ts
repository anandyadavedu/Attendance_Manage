import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css']
})
export class EmpDetailComponent implements OnInit {
  EmployeeDetailList:any=[];
  collection: any;
  dataItem:any;
  // toastr: any;

  constructor(private sharedService: SharedService, private toastr:ToastrService,private router:Router){}
  ngOnInit(): void {
  this.refreshEmployeeList();
  // this.deleteEmployee(dataItem:any);
  this.dataItem = history.state;

  }
  


  refreshEmployeeList() {
    this.sharedService.getEmployeeDetailsList().subscribe(data =>{
      this.EmployeeDetailList = data;
      // console.log("EmployeeDetailList",this.EmployeeDetailList);
    });
  }


  editEmployee(dataItem:any){
    if(confirm('Are You Sure To Do This??')){
      // this.sharedService.editEmployee(dataItem).subscribe(data=>{
        
       this.router.navigateByUrl('/registration', { state: dataItem });
        // this.EmployeeDetailList=data;
        // this.toastr.success('Edit Successfully',' ')
        // this.refreshEmployeeList();
      // })
    }
// this.router.navigateByUrl('/registration', { state: dataItem });
   
  }

    deleteEmployee(dataItem: any){debugger
      if(confirm('Are you sure??')){
        this.sharedService.deleteEmployee(dataItem).subscribe(data =>{
        
          this.toastr.success('Delete Successfully','')
          this.refreshEmployeeList();

        })
      }
    }

    viewEmployee(dataItem:any){
      
      // this.sharedService.getEmployeeDetailById(dataItem).subscribe(data =>{
      //   this.EmployeeDetailList=data;
      // });
      this.router.navigateByUrl('/view-emp', { state: dataItem });

    }
   
  
}
