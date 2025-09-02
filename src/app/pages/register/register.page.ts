import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageProvider } from 'src/app/shared/provide/storage-provider';
import { Iuser, UserService } from 'src/app/shared/service/user-service';
import { v4 as uuidv4 } from 'uuid';
import { AlertController } from '@ionic/angular';
import { Country } from 'src/app/interfaces/country';
import { Api } from 'src/app/shared/provide/api';

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
  CONFIRMPasswordControl: FormControl = new FormControl('', [Validators.required])
  data:Country[]=[];
  constructor(private userService: UserService, private router: Router,private alertCtrl: AlertController,private http:Api) { }

  ngOnInit() {
    this.loadCountries();
  }

  async onsubmit() {

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

const user: Iuser = {
      id: uuidv4(),
      name: this.nameControl.value,
      lastName: this.lastNameControl.value,
      country: this.countryControl.value,
      email: this.emailControl.value,
      password: this.passwordControl.value,

    }
   
 if (this.passwordControl.value.trim() !== this.CONFIRMPasswordControl.value.trim()) {
  const alert = await this.alertCtrl.create({
    header: 'Error',
    message: 'Passwords do not match',
    buttons: ['OK']
  });
  await alert.present();
  return;
}


    this.userService.registeruser(user);
    console.log('User registered successfully');
    this.router.navigate(['/login']);

  }
   async loadCountries() {
  const response = await this.http.get<any>('https://countriesnow.space/api/v0.1/countries/flag/unicode');
  this.data = response.data?.map((c: any) => ({
    name: c.name,
    unicodeFlag: c.unicodeFlag
  })) || [];
}

  gotologin() {
    this.router.navigate(['/login']);
  }
}

