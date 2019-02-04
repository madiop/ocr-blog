import { Component } from '@angular/core';
import { Post } from './models/posts';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
    
  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );

    var config = {
      apiKey: "AIzaSyBEctpR_r0gh7m4z-XAFG_yAn1xDdItSGs",
      authDomain: "blog-98aa5.firebaseapp.com",
      databaseURL: "https://blog-98aa5.firebaseio.com",
      projectId: "blog-98aa5",
      storageBucket: "blog-98aa5.appspot.com",
      messagingSenderId: "537864490770"
    };
    firebase.initializeApp(config);
  
  }
 
  onAllumer(){
    console.log('On allume tout!');
  }

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  
}
