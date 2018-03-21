import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostListItemComponent } from './post/postlistitem.component';
import { PostListComponent } from './postlist/postlist.component';




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
