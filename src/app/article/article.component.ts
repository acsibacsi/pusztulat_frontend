import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../core/article.service';
import { AuthorService } from '../core/author.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Article } from '../core/article';
import { Author } from '../core/author';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article! : Article;
  author! : Author;
  private routeSub!: Subscription;
  
  constructor(
    private articleService: ArticleService,
    private authorService: AuthorService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.getArticle(params['id']);
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
  
  private getArticle(id : number): void {
    let promise = Promise.resolve(this.articleService.getArticle(id));
    promise.then((val) => {
      this.article = val;
      this.getAuthor(this.article?.author);
    }).catch((error) => {
      console.log("Promise rejected with " + JSON.stringify(error));
    });
  }

  private getAuthor(id : number): void {
    let promise = Promise.resolve(this.authorService.getAuthor(id));
    promise.then((val) => {
      this.author = val;
    }).catch((error) => {
      console.log("Promise rejected with " + JSON.stringify(error));
    });
  }
}
