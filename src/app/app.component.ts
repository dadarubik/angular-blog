import { Component } from '@angular/core';
import { Post } from './post';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    new Post( 'Premier post',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis, lorem ut pretium ornare, nisl massa sodales sem, pulvinar ullamcorper ligula libero at ipsum. ',
              1,
              null),
    new Post( 'Deuxième post',
              'Aliquam lacinia quam consequat, ultrices lacus vel, pulvinar turpis. Sed odio neque, bibendum eu enim non, convallis finibus libero.',
              -1,
              null),
    new Post( 'Troisième post',
              'Fusce posuere venenatis purus, id porta sapien vulputate ut.',
              0,
              null)              
  ];

  


}
