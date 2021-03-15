import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { BlogService } from '../blog.service';
// import { Blogs } from '../Blogs';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {
  public blog: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.blog = data;
      console.log('this is blogdata', typeof(data), this.blog)
    })
  }

}
