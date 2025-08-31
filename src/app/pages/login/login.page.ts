import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageProvider } from 'src/app/shared/provide/storage-provider';
import { UserService } from 'src/app/shared/service/user-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone:false
})
export class LoginPage implements OnInit {
emailcontrol:FormControl = new FormControl('', [Validators.required, Validators.email]);
passwordcontrol:FormControl = new FormControl('', [Validators.required,Validators.minLength(6)]);

  constructor(private userService: UserService, private router:Router,){ }

  ngOnInit() {

  }
    onsubmit() {
    const email = this.emailcontrol.value;
    const password = this.passwordcontrol.value;

    if (this.userService.LoginUser(email, password)) {
      console.log('Login successful');

       this.router.navigate(['/home']);
    } else {
      console.log('Invalid credentials');

    }
    }

  gotoregister(){
    this.router.navigate(['/register']);
  }

}
