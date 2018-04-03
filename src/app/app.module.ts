import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostService } from './services/post.service';
import { NewPostComponent } from './new-post/new-post.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'posts', component: PostListComponent},
  { path: 'new-post', component: NewPostComponent},
  { path: '', redirectTo: 'posts', pathMatch: 'full'},
  { path: '**', redirectTo: 'posts'}

]


@NgModule({
  declarations: [
    AppComponent,
    PostListItemComponent,
    PostListComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
