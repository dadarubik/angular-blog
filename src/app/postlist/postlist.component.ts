import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostListComponent implements OnInit {
  @Input() myPosts: Post[];

  constructor() { }

  ngOnInit() {
  }

}
