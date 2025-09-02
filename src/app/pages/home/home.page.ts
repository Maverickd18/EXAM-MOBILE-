import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/shared/provide/newsapi';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {
  data: any = null;
  loading = false;

  constructor(private newsApi: NewsApiService) {}

  ngOnInit() {
    this.loadNews();
  }

  loadNews(event?: any) {
    this.loading = true;
    this.newsApi.getNews().subscribe({
      next: (res) => {
        this.data = res;
        this.loading = false;
        if (event) event.target.complete();
        console.log(this.data); // Para depuración
      },
      error: (err) => {
        this.loading = false;
        if (event) event.target.complete();
        console.error('Error cargando noticias:', err);
      }
    });
  }

  doRefresh(event: any) {
    this.loadNews(event);
  }
}