import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../core/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private httpClient: HttpClient) {}

  async getArticles(): Promise<Article[]> {
    return (await this.httpClient.get('https://api.pusztulat.hu/wp-json/wp/v2/posts/').toPromise()) as Article[];
  }

  async getArticle(articleId: number): Promise<Article> {
    return (await this.httpClient
      .get(`https://api.pusztulat.hu/wp-json/wp/v2/posts/${articleId}`)
      .toPromise()) as Article;
  }
/* * /
  async createArticle(article: Article): Promise<Article> {
    return (await this.httpClient
      .post('https://api.pusztulat.hu/wp-json/wp/v2/posts/', article)
      .toPromise()) as Article;
  }

  async editArticle(articleToEdit: Article, value: Article): Promise<Article> {
    return (await this.httpClient
      .put(`https://api.pusztulat.hu/wp-json/wp/v2/posts/${articleToEdit.id}`, value)
      .toPromise()) as Article;
  }

  async deleteArticle(article: Article): Promise<void> {
    await this.httpClient.delete(`https://api.pusztulat.hu/wp-json/wp/v2/posts/${article.id}`).toPromise();
  }
/* */
}