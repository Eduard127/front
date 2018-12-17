import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HomeApp } from '../home/home.component';
//import { RecetaPage } from '../receta/receta';

@NgModule({
  declarations: [
    HomeApp,
    //RecetaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(HomeApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    HomeApp,
    //RecetaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class HomeModule {}
