import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

//import { MyApp } from '../../app/app.component';
//import { RecetaPage } from '../Receta/Receta';
//import { Homepage } from './home.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  content: any;

  constructor(public navCtrl: NavController) {

  }
  items = [
    'Reposteria',
    'Pescados',
    'Pastas',
    'Sopas',
    'Postres',
    'Bebidas',
    'Ensaladas',
    'Platos',
    'salsas',
    'Carnes',

  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
}

