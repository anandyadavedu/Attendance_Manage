import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject,Observable } from 'rxjs';


    @Injectable({
      providedIn: 'root',

    })
    export class SharedService {
                [x: string]: any;
    
                readonly APIUrl = 'https://localhost:44302/api/';
                constructor(private http: HttpClient) {}


                Registration(val:any) {
                  return this.http.post(this.APIUrl+ 'Registration/InsertEmployee', val);
                }


                Login(val: any) {
                  return this.http.post(this.APIUrl + 'Login/login', val);
                }

                getEmployeeDetailsList(): Observable < any[] > {
                  return this.http.get < any > (this.APIUrl + 'Employee/GetEmployeeDetail');
                }

                deleteEmployee(Employee_ID: any) {
                  return this.http.delete(this.APIUrl + 'Registration/DeleteEmployee?Employee_ID=' + Employee_ID);
                }

                editEmployee(Employee_ID:any){
                  return this.http.put(this.APIUrl+ 'Registration/UpdateEmployee',  Employee_ID);
                }

                editProject(Id:any){
                  return this.http.put(this.APIUrl+ 'Project/UpdateProject',Id)
                }

                getProjectDetail():  Observable < any[] > {
                  return this.http.get<any>(this.APIUrl + 'Project/GetProjectDetail');
                }

                getPriority(){
                  return this.http.get<any>(this.APIUrl+ 'Project/GetPriority');
                }


                getdeveloper(){
                  return this.http.get<any>(this.APIUrl+ 'Project/GetDeveloperByRoleId');
                }

                getmanager(){
                  return this.http.get<any>(this.APIUrl+'Project/GetManagerByRoleId');
                }

                getProjectTeam(){
                  return this.http.get<any>(this.APIUrl+'Project/GetProjectTeam');
                }


                // getEmployeeDetailById(Employee_ID:any){
                //   return this.http.post(this.APIUrl+ 'Employee/GetEmployeeDetailById',  Employee_ID);
                // }

                
                InsertionProject(val:any) {
                  return this.http.post(this.APIUrl+ 'Project/InsertProject', val);
                }

                InsertionProjectTeam(val:any):Observable<any>{
                  return this.http.post(this.APIUrl+ 'Project/InsertProjectTeam',val);
                }

                deleteProject(Id:any){
                  return this.http.delete(this.APIUrl + 'Project/DeleteProject?Id=' + Id);
                }

                getstates(){
                  return this.http.get<any>(this.APIUrl+'Registration/GetStates');
                }


                getcities(id:any){
                  return this.http.get<any>(this.APIUrl+'Registration/GetCities?id='+id);
                }

    }

