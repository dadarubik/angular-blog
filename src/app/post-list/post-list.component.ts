import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../models/Post.model';
import { Subscription } from 'rxjs/Subscription';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[];

  postsSubscription: Subscription;

  constructor(private postService : PostService) { }

  ngOnInit() {
    this.postService.getPosts();
    this.postsSubscription = this.postService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    )
    this.postService.emitPosts();
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

}
