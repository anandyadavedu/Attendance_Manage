import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';
import {
  AbstractControl,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
// import { ToastrService } from 'ngx-toastr';
// import { AuthenticatedResponse } from 'src/app/app.module';
//import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm = new UntypedFormGroup({});
  public submitted = false;

  username: any;
  password: any;
  invalid_msg: any;
  // toastr: any;
  // toastrService: any;
  

  constructor(
    private service: SharedService,
    private router: Router,
    private formBuilder: UntypedFormBuilder,
    private toastr:ToastrService  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
 
  }

  get formControl() {
    return this.loginForm.controls;
  }

  invalidLogin: boolean = true;

  CheckLogin() {
    this.submitted = true;
    if (this.loginForm.valid) {
      var val = {
        username: this.username,
        password: this.password,
      };
      this.service.Login(val).subscribe((res) => {
        if (res == 'Success') {
          this.toastr.success('Successfully login','Welcome');
          this.router.navigate(['registration']);
        } else {
          this.router.navigate(['login']);
          this.invalid_msg = res.toString();
          this.toastr.error(this.invalid_msg);
        }
      });
    }
  }

  
}
