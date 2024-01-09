import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-project-team',
  templateUrl: './view-project-team.component.html',
  styleUrls: ['./view-project-team.component.css']
})
export class ViewProjectTeamComponent implements OnInit{
  projectDetail: any;
  projectTeam:any;
  dataItem:any;


  constructor(private router:Router){}




  ngOnInit(): void {
    
    this.projectDetail=history.state;
  }
  


  GoProject(){
    this.router.navigateByUrl('/view-project-team');
  }

}
