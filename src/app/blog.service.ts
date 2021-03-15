import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blogs } from './Blogs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiurl = "http://localhost:3000/Blogs/";
  constructor(private http: HttpClient) { }
  public blogdata = [];

  getData() {
    return this.http.get<Blogs[]>(this.apiurl);
  }
}
