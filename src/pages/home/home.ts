import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { HttpClient } from '@angular/common/http';



//import { MyApp } from '../../app/app.component';
//import { RecetaPage } from '../Receta/Receta';
//import { Homepage } from './home.component';
import { HomeModule } from './home.module';

platformBrowserDynamic().bootstrapModule(HomeModule);

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  content:any = HomeModule;

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

