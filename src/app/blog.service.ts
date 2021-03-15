import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from './Blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private http: HttpClient) { }
  
  private apiurl = "http://localhost:3000/Blogs/";
  public blogdata = [];

  getData() {
    return this.http.get<Blog[]>(this.apiurl);
  }

  getBlog(id) {
    // console.log('the id is ',id)
    let blogurl = `http://localhost:3000/Blogs/${id}`;
    // return this.http.get<Blogs[]>(blogurl);
    return this.http.get(blogurl);
  }

  // getSingle(id: number) {
  // getSingle(id) {
  //   console.log('get single dskajkjsdahk ', id)
  //   // if(this.blogdata === [])
  //   this.getData().subscribe(data => {
  //     this.blogdata = Array.from(Object.keys(data), i=>data[i]);
  //     console.log(this.blogdata);
  //     return this.blogdata.filter(d => d.id === id)
  //   })
  // }
}
