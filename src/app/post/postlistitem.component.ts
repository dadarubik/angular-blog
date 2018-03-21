import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-postlistitem',
  templateUrl: './postlistitem.component.html',
  styleUrls: ['./postlistitem.component.css']
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
