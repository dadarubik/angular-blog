import { Component } from '@angular/core';
import { Post } from './post';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  posts = [
    new Post( 'Premier post',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis, lorem ut pretium ornare, nisl massa sodales sem, pulvinar ullamcorper ligula libero at ipsum. ',
              15,
              new Date(2018, 3, 18, 15, 55)),
    new Post( 'Deuxième post',
              'Aliquam lacinia quam consequat, ultrices lacus vel, pulvinar turpis. Sed odio neque, bibendum eu enim non, convallis finibus libero.',
              22,
              new Date(2018, 3, 19, 18, 32)),
    new Post( 'Troisième post',
              'Fusce posuere venenatis purus, id porta sapien vulputate ut.',
              -3,
              new Date(2018, 3, 20, 21, 50))              
  ];

  


}
