import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogService } from './blog.service';
import { HttpClientModule } from '@angular/common/http';
import { BlogViewComponent } from './blog-view/blog-view.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
