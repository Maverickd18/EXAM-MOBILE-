import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Api } from 'src/app/shared/provide/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone:false
})
export class HomePage implements OnInit {
  data: any | null = null;

  constructor(private router:Router,private api:Api) { }

  ngOnInit() {
  }
  async thenews(){
    this.data = await this.api.get('https://newsapi.org/v2/top-headlines?language=es');
  }
}
