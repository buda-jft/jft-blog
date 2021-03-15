import { Component } from '@angular/core';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog-app';
  // constructor(private myBlog: BlogService) { }
  constructor() { }

  ngOnInit() {
    // this.myBlog.getData()
  }
}
