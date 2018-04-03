import { Injectable } from '@angular/core';
import { Post } from '../models/Post.model';
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';

@Injectable()
export class PostService {

  //posts: Post[] = [];
  posts: Post[] = [
    new Post( 'Premier post',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis, lorem ut pretium ornare, nisl massa sodales sem, pulvinar ullamcorper ligula libero at ipsum. ',
              1,
              new Date().getTime()),
    new Post( 'Deuxième post',
              'Aliquam lacinia quam consequat, ultrices lacus vel, pulvinar turpis. Sed odio neque, bibendum eu enim non, convallis finibus libero.',
              -1,
              new Date().getTime()),
    new Post( 'Troisième post',
              'Fusce posuere venenatis purus, id porta sapien vulputate ut.',
              0,
              new Date().getTime())              
  ];
  postsSubject = new Subject<Post[]>();

  constructor() { }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  getPosts() {
    //this.posts = ;
    //TODO get
    this.emitPosts();
    /*

        firebase.database().ref('/books')
      .on('value', (data) => {
        this.books = data.val() ? data.val() : [];
        this.emitBooks();
      })
      */
  }

  addNewPost(post: Post) {
    this.posts.push(post);
    this.savePosts();
    this.emitPosts();
  }

  removePost(post: Post) {
    const index = this.posts.findIndex(
      (currentPost) => {
        if (currentPost === post)
          return true;
      }
    )
    if (index > -1) {
      this.posts.splice(index, 1);
      this.savePosts();
      this.emitPosts();
    }
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

}
