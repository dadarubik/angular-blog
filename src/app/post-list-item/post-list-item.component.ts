import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/Post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() myPost: Post;

  constructor() { 
  }

  ngOnInit() {
    this.myPost.createdAt = new Date();
  }

  onLove() {
    this.myPost.loveIts++;
  }

  onDontLove() {
    this.myPost.loveIts--;
  }
}
