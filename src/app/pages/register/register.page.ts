import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageProvider } from 'src/app/shared/provide/storage-provider';
import { Iuser, UserService } from 'src/app/shared/service/user-service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false
})
export class RegisterPage implements OnInit {

  nameControl: FormControl = new FormControl('', [Validators.required])
  lastNameControl: FormControl = new FormControl('', [Validators.required])
  emailControl: FormControl = new FormControl('', [Validators.required, Validators.email])
  passwordControl: FormControl = new FormControl('', [Validators.required])
  countryControl: FormControl = new FormControl('', [Validators.required])

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onsubmit() {

// Verifica si los campos están vacíos
  if (!this.passwordControl.valid 
    || !this.emailControl.valid 
    || !this.nameControl.valid 
    || !this.lastNameControl.valid 
    || !this.countryControl.valid) {
    console.log('fill all the fields');
    return;
  }

  // Verifica el formato del email
  if (!this.emailControl.valid) {
    console.log('Invalid email format');
    return;
  }

const user:Iuser = {
        id: uuidv4(),
      name: this.nameControl.value,
      lastName: this.lastNameControl.value,
      country: this.countryControl.value,
      email: this.emailControl.value,
      password: this.passwordControl.value
    }


    this.userService.registeruser(user);

  }

  gotologin() {
    this.router.navigate(['/login']);
  }
}
function uuidv4(): string {
  throw new Error('Function not implemented.');
}

