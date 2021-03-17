import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogViewComponent } from './blog-view/blog-view.component'
import {HomeComponent} from './home/home.component'

const routes: Routes = [
  {path: "blogview/:id", component: BlogViewComponent},
  // {path: "blogview", component: BlogViewComponent},
  {path: "", component: HomeComponent},
  {path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [BlogViewComponent];
