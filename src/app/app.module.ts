import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostListItemComponent } from './post-list-item/postlistitem.component';
import { PostListComponent } from './post-list/postlist.component';




@NgModule({
  declarations: [
    AppComponent,
    PostListItemComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
