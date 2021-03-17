import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
// import { Blog } from '../Blog';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {
  public blog: {};
  constructor(
    private route: ActivatedRoute,
    private myBlog: BlogService,
    ) { }
  
  ngOnInit() {
    this.route.params.subscribe(data => {
      // get just one blog
      this.myBlog.getBlog(data.id).subscribe((b) => {
        // this.blog = Array.from(Object.keys(b), i=>b[i]); // this is wrong why
        this.blog = b;
        // console.log('last get blog from subs ', typeof(this.blog), this.blog.username);
      }), e => console.log(e)
    })
    
  }
}
