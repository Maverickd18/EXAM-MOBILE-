import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageProvider } from 'src/app/shared/provide/storage-provider';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone:false
})
export class LoginPage implements OnInit {
emailcontrol:FormControl = new FormControl('', [Validators.required, Validators.email]);
passwordcontrol:FormControl = new FormControl('', [Validators.required,Validators.minLength(6)]);

  constructor(private storageProvider:StorageProvider, private router:Router,){ }

  ngOnInit() {

  }
    onsubmit() {
     const user={
      email:this.emailcontrol.value,
      password:this.passwordcontrol.value
     };
      if(!this.passwordcontrol.valid){
      console.log('Please the labels are requiered and the password must be at least 4 characters');
      return;
     }
     if(!this.emailcontrol.valid){
      console.log('Email is invalid');
      return;
     }
    
     this.storageProvider.set('user', JSON.stringify(user));
    }
  gotoregister(){
    this.router.navigate(['/register']);
  }

}
