import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../core/article.service';
import { Article } from '../core/article';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles! : Promise<Article[]>;

  constructor(
    private articleService: ArticleService, 
    private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {
    this.getArticles();
  }

  private getArticles(): void {
    this.articles = this.articleService.getArticles();
  }

  openArticle(article: Article): void {
    this.router.navigate([article.id], { relativeTo: this.route });
  }

}
