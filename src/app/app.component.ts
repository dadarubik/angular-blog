import { Component } from '@angular/core';
import * as firebase from 'firebase';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 

  constructor() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCKxCBfKAAq7zv4APQbrsoMwyEXtkXVnJ0",
      authDomain: "angularblog-1bf4a.firebaseapp.com",
      databaseURL: "https://angularblog-1bf4a.firebaseio.com",
      projectId: "angularblog-1bf4a",
      storageBucket: "",
      messagingSenderId: "772012240138"
    };
    firebase.initializeApp(config);
  }

}
