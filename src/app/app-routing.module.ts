import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';
import { ProjectComponent } from './project/project.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { VeiwEmpComponent } from './veiw-emp/veiw-emp.component';
import { ViewProjectTeamComponent } from './view-project-team/view-project-team.component';
// import { SidebarComponent } from './sidebar/sidebar.component';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'login',component:LoginComponent},
  { path: 'registration', component: RegistrationComponent },
  {path:'emp-detail',component:EmpDetailComponent},
  {path:'project',component:ProjectComponent},
  {path:'project-detail',component:ProjectDetailComponent},
  {path:'view-emp',component:VeiwEmpComponent},
  {path:'view-project-team',component:ViewProjectTeamComponent},
 
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }