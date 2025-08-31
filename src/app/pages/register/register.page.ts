import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { StorageProvider } from 'src/app/shared/provide/storage-provider';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone:false
})
export class RegisterPage implements OnInit {
emailcontrol = new FormControl('', [Validators.required, Validators.email]);
passwordcontrol = new FormControl('', [Validators.required, Validators.minLength(6)]);
namecontrol = new FormControl('', [Validators.required]);
lastnamecontrol = new FormControl('', [Validators.required]);
countrycontrol = new FormControl('', [Validators.required]);
  storageProvide: any;


constructor(private storageProvider:StorageProvider){ }


  ngOnInit() {
  }
  onsubmit() {
     const user={
      id: uuidv4(),
      email:this.emailcontrol.value,
      password:this.passwordcontrol.value,
    
      name:this.namecontrol.value,
      lastname:this.lastnamecontrol.value,
      country:this.countrycontrol.value
     };
      if(!this.passwordcontrol.valid){
      console.log('the password must be at least 4 characters');
      return;
     }
     if(!this.emailcontrol.valid){
      console.log('Email is invalid');
      return;
     }
     if(!this.namecontrol.valid){
      console.log('Name is invalid');
      return;
     }
      if(!this.lastnamecontrol.valid){
      console.log('Last Name is invalid');
      return;
     }
    
     this.storageProvider.set('user', JSON.stringify(user));
    }
  

}
