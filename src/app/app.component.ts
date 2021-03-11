import { Component } from '@angular/core';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog-app';
  public blogdata = [];
  constructor(private myBlog: BlogService) {}
  ngOnInit() {
    this.myBlog.getData().subscribe((data) => {
      this.blogdata = Array.from(Object.keys(data), i=>data[i]);
      // manipulate the data before storing into blogdata

      console.log(this.blogdata);
      // maybe put this on localstorage and manipulate in there
    })
    // console.log(this.blogdata.length); // how to make this async
  }
}
