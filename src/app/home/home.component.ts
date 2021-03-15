import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public blogdata = [];

  constructor(
    private myBlog: BlogService,
    private router: Router
    ) { }

  ngOnInit() {
    this.myBlog.getData().subscribe((data) => {
      this.blogdata = Array.from(Object.keys(data), i=>data[i]);
      // console.log(this.blogdata);
    }, (e) => console.log(e))
  }

  // enforce type here
  navigate(id) {
    // how to serialilze id from here
    this.router.navigate(['blogview', id]);
    // console.log(data)
  }

}
