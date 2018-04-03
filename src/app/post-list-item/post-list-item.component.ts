import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/Post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() myPost: Post;

  constructor(private postService: PostService) { 
  }

  ngOnInit() { }

  onLove() {
    this.myPost.loveIts++;
  }

  onDontLove() {
    this.myPost.loveIts--;
  }

  onRemovePost(post: Post) {
    this.postService.removePost(post);
  }
}
