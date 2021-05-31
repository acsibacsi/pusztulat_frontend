import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Author } from '../core/author';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  constructor(private httpClient: HttpClient) {}

  async getAuthor(authorId: number): Promise<Author> {
    return (await this.httpClient
      .get(`https://api.pusztulat.hu/wp-json/wp/v2/users/${authorId}`)
      .toPromise()) as Author;
  }
}