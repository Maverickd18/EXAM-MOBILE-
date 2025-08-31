import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone:false
})
export class LoginPage implements OnInit {
emailcontrol:FormControl = new FormControl('', [Validators.required, Validators.email]);
passwordcontrol:FormControl = new FormControl('', [Validators.required, Validators.minLength(6)]);

  constructor() { }

  ngOnInit() {
    
  }
    onsubmit() {
      console.log(this.emailcontrol.value);
      console.log(this.passwordcontrol.value);
    }
  

}
