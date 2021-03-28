import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Shorturl } from './shorturl.model';

@Injectable({
  providedIn: 'root'
})
export class ShorturlService {

  formData: Shorturl = new Shorturl();
  readonly baseUrl = 'https://urlshortenerwebsite.azurewebsites.net/api/ShortUrls';
  list: Shorturl[];

  constructor(private http: HttpClient) { }

  postShortUrl(){
    return this.http.post(this.baseUrl, this.formData);
  }

  refreshList(){
    this.http.get(this.baseUrl)
    .toPromise()
    .then(result => this.list = result as Shorturl[])
    .catch(error => console.log(error));
  }
}
