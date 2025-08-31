import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone:false
})
export class InputComponent  implements OnInit {
 @Input() label: string = '';
 @Input() type:'email' | 'password' | 'name'| 'lastname'| 'country'| 'text' = 'text';
 @Input() clear:boolean = false;
 @Input() control:FormControl = new FormControl();
 

  
  constructor() { }

  ngOnInit() {}

}
