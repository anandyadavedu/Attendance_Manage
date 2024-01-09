import { Component, OnInit, Inject} from '@angular/core';
import { SharedService } from '../shared.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import {MatButtonModule} from '@angular/material/button';
// import {Dialog, DIALOG_DATA, DialogModule} from '@angular/cdk/dialog';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
 
})
export class ProjectComponent implements OnInit{
      ProjectDetailList:any=[];
      dataItem: any;
      projectTeam: any;
      // showPopup=false;
      // dialog: any;
      // selectedItemId: any;
      // animal!: 'panda' | 'unicorn' | 'lion';
    //  dialogRef: any;

    // public dialog: Dialog


      constructor(private sharedService: SharedService, private toastr:ToastrService,
        private router:Router,private dialogRef: MatDialog){}


      ngOnInit(): void {
          this.refreshProjectList();
          this.dataItem=history.state
      }


        refreshProjectList() {
          this.sharedService.getProjectDetail().subscribe(data =>{
            this.ProjectDetailList = data;

          this.sharedService.getProjectTeam().subscribe(data=>{
            this.projectTeam=data;
          })
            
            // console.log("ProjectDetailList",this.ProjectDetailList);
          });
        }

        GoToProjectDetail(){
          this.router.navigateByUrl('/project-detail',);
        }

       
        
        UpdateProject(dataItem:any){
          
          this.router.navigateByUrl('/project-detail', {state:dataItem});

        }

        deleteProject(dataItem: any){
          if(confirm('Are you sure??')){
            this.sharedService.deleteProject(dataItem).subscribe(data =>{
              // alert(data.toString());
              this.toastr.success('Delete Successfully','')
              this.refreshProjectList();
    
            })
          }
        }

      //   openDialog(selectedItemId:any){
      //     if(this.selectedItemId!==null){
      //     const dialogRef=this.dialog.open(PopupComponent,{data:{Id:this.selectedItemId},});

      //     // this.dialogRef.open(PopupComponent);
      //     dialogRef.afterClosed().subscribe((res:any)=>{
      //       console.log('DialogResult:', res);
      //     });
      //   }
      // }
      openDialog(Id:any):void{
        // const dialogRef=this.dialog.open(PopupComponent,{data:{Id},});
        this.dialogRef.open(PopupComponent,{data:{Id},});
      }


      viewProjectTeam(dataItem:any){
        this.router.navigateByUrl('/view-project-team',{state:dataItem});

      }



  }
