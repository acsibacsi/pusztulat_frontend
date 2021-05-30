import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../core/article.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Article } from '../core/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article! : Article;
  private routeSub!: Subscription;
  
  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.getArticle(params['id']);
    });
    
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
  
  private getArticle(id : any): void {
    const article_ = this.articleService.getArticle(id);
    let promise = Promise.resolve(article_);
    promise.then((val) => {
      this.article = val;
    }).catch((error) => {
      console.log("Promise rejected with " + JSON.stringify(error));
    });
  }
}
