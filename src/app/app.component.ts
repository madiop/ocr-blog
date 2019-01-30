import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

  posts = [
    {
      title: 'Présidentielle 2019',
      content: 'Avec seulement cinq candidats, un processus électoral fortement controversé et une absence remarquée des dinosaures politiques ainsi que des femmes, la présidentielle de 2019 est partie pour être le scrutin des exceptions.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Me Aïssata Tall Sall officialise',
      content: 'Aïssata Tall Sall, Présidente du mouvement <<Osez l`avenir >>, a finalement rejoint le camp du pouvoir. Elle a officialisé sa décision ce lundi, face à la presse.',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'La déclaration d’amour de Gadio à Macky',
      content: 'Dr Cheikh Tidiane Gadio, président de Luy jot jotna, a formalisé son soutien au Président Macky Sall, en vue de la présidentielle du 24 février. Il a présidé le Conseil national extraordinaire de son mouvement, ce dimanche au Cices.',
      loveIts: 0,
      created_at: new Date()
    },
  ];
  
  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
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
