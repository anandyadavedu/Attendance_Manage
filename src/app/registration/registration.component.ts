import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {  UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
    public registrationForm=new UntypedFormGroup({})
    public submitted = false;
    public update=false;

    

    // states1:any=[];
    // city1:any=[];
    id:any;
    dataItem:any;


    fullname:any;
    dob:any;
    email:any;
    phonenumber:any;
    gender:any;
    state:any;
    city:any;
    pincode:any;
    joiningdate:any;
    resume:any;
    username: any;
    applyingposition: any;
    address1:any;
    address2:any;
    url:any;
    msg:any;
    selectedFile:any;
    Additional_Documents:any;
   

    selectedImages: string[] = [];
    selectedFiles:any;

    states:any=[];
    cities: any;

    constructor(
      private service: SharedService,
      private router: Router,
      private formBuilder: UntypedFormBuilder,
      private toastr:ToastrService,
      private fileInput: ElementRef  ) {}

  ngOnInit(): void {debugger
      this.registrationForm = this.formBuilder.group({
        fullname: ['', [Validators.required]],
        dob: ['', [Validators.required]],
        email: ['', [Validators.required]],
        phonenumber: ['', [Validators.required]],
        gender: ['', [Validators.required]],
        state: [""],
        city: ['', [Validators.required]],
        pincode: ['', [Validators.required]],
        joiningdate: ['', [Validators.required]],
        resume: ['', [Validators.required]] , 
        applyingposition: [''] , 
        address1: ['', [Validators.required]] , 
        address2: ['', [Validators.required]] , 

        Additional_Documents:['']

        
      });


      this.dataItem = history.state;
      this.id=this.dataItem.Employee_ID;
      this.fullname=this.dataItem.Full_Name;
      
      // this.dob=this.dataItem.DOB.split("T",1);
      this.dob=this.dataItem.DOB;
      this.email=this.dataItem.Email;
      this.phonenumber=this.dataItem.PhoneNumber;
      this.address1=this.dataItem.Address1;
      this.address2=this.dataItem.Address2;
      this.gender=this.dataItem.Gender;
      this.state=this.dataItem.State;
      this.city=this.dataItem.City;
      this.pincode=this.dataItem.Pincode;
      // this.joiningdate=this.dataItem.Joining_date.split("T",1);
      this.joiningdate=this.dataItem.Joining_date;
      this.resume=this.dataItem.Upload_Document;

      this.Additional_Documents=this.dataItem.Additional_Documents;


     this.service.getstates().subscribe((data:any)=>{
      this.states=data;
      // console.log("Hii ANAND",this.states);
     });

    //  this.service.getcities().subscribe((data:any)=>{debugger
    //   this.cities=data;
    //   console.log("Hii ANAND",this.city);
    //  })






      // this.states1 = [
      //   { id: 1, name: "Mumbai" },
      //   { id: 2, name: "Delhi" },
      //   { id: 3, name: "Bangalore" },
      //   { id: 4, name: "Noida" },
      //   { id: 5, name: "UP" }
      // ];

      //   this.city1=[
      //     { id:1,name:"Varansi"},
      //     { id:2,name:"Ghazipur"},
      //     { id:3,name:"Lucknow"},
      //     { id:4,name:"Allhabad"},
      //   ];
  }
  get formControl(){
     return this.registrationForm.controls;
  }


  onselectFile(event: any) { 
      if(!event.target.files[0] || event.target.files[0].length == 0) {
        this.msg = 'You must select an image';
        return;
      }
      
      var mimeType = event.target.files[0].type;
      
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
    

      this.selectedFile=<File>event.target.files[0];
  }
   

    
  checkRegistration()
  {debugger

       this.submitted = true;

      // if(this.registrationForm.valid){


         const formData=new FormData();
         formData.append('Full_Name',this.fullname);
         formData.append('DOB',this.dob);
         formData.append('Email',this.email);
         formData.append('PhoneNumber',this.phonenumber);
         formData.append('Address1',this.address1);
         formData.append('Address2',this.address2);
         formData.append('State',this.state);
         formData.append('City',this.city);
         formData.append('Pincode',this.pincode);
         formData.append('Joining_date',this.joiningdate);
         formData.append('Gender',this.gender);
         formData.append('Upload_Document',this.selectedFile);

         formData.append('Additional_Documents',this.selectedFiles);
       

      this.service.Registration(formData).subscribe((res) => {
        if (res == 'Added Successfully') {
          this.toastr.success('successfully Added','');
          this.router.navigate(['emp-detail']);
        } else {
          this.router.navigate(['login']);
          // this.invalid_msg = res.toString();
          // this.toastr.error('Some thing missing','fill carefully');
           }
        });
      // }

 
  }

    UpdateRegistration(){debugger

      this.update=true;

      if(this.registrationForm.valid){

        const formData=new FormData();

        formData.append('Employee_ID',this.id);
        formData.append('Full_Name',this.fullname);
        formData.append('DOB',this.dob);
        formData.append('Email',this.email);
        formData.append('PhoneNumber',this.phonenumber);
        formData.append('Joining_date',this.joiningdate);
        formData.append('Address1',this.address1);
        formData.append('Address2',this.address2);
        formData.append('State',this.state);
        formData.append('City',this.city);
        formData.append('Gender',this.gender);
        formData.append('Pincode',this.pincode);
        if(this.selectedFile){
          formData.append('Upload_Document',this.selectedFile);
        }



        this.service.editEmployee(formData).subscribe(res =>{
          if (res == 'Update Successfully') {
            this.toastr.success('Successfully Updated','');
            this.router.navigate(['emp-detail']);
          }
          else{
            this.router.navigate(['home']);
          }
        });

      }
    }


    // onFileSelect(event: any) {
    //   const selectedFiles = event.target.files;
  
    //   if (selectedFiles && selectedFiles.length > 0) {
    //     // You can now process the selected files, e.g., upload them to a server,
    //     // display them, or perform any other necessary actions.
    //     console.log('Selected files:', selectedFiles);
    //   }
    // }

    // @ViewChild('fileInput') fileInputs: ElementRef | undefined;
    // selectedFiles: File[] = [];
  
    // onFileSelect(event: any) {
    //   this.selectedFiles = Array.from(event.target.files);
  
    //   // Clear the file input to allow selecting the same file again
    //   this.fileInput.nativeElement.value = '';
    // }
  
    // removeFile(file: File) {
    //   const index = this.selectedFiles.indexOf(file);
    //   if (index !== -1) {
    //     this.selectedFiles.splice(index, 1);
    //   }
    // }



    onFileSelect(event: any): void {
      const files = event.target.files;
      if (files && files.length > 0) {
          for (let i = 0; i < files.length; i++) {
              const reader = new FileReader();
              reader.onload = (e: any) => {
                  this.selectedImages.push(e.target.result);
              };
              reader.readAsDataURL(files[i]);
              // reader.readAsText(files[i]);
          }
      }
  }



  // selectedFiles: File[] = [];

  

  // onFileSelect(event: any) {debugger
  //   this.selectedFiles = Array.from(event.target.files);
  //   this.selectedFiles = this.selectedFiles.concat(Array.from(event.target.files));
  // }


  onSelectFiles(event: any) {
    const inputField = event.target;
    if (!inputField.files || inputField.files.length === 0) {
      this.msg = 'You must select at least one image.';
      return;
    }
  
    const selectedFiles: File[] = Array.from(inputField.files);
    
    // Now, you can handle the selected files in your application.
    // For example, you can store them in an array.
    this.selectedFiles = selectedFiles;
  
    // You can also display information about the selected files if needed.
    this.displayFileInfo(selectedFiles);
  }
  
  displayFileInfo(files: File[]) {
    for (const file of files) {
      console.log('File Name:', file.name);
      console.log('File Type:', file.type);
      console.log('File Size:', file.size, 'bytes');
      // Add your logic to insert or process the files here
    }
  }
  

  OnselectState(StateID:any){debugger
    this.service.getcities(StateID).subscribe((data:any)=>{
      this.cities=data;
      console.log("ANAND YADAV",this.cities)
    })

  }

  
}


