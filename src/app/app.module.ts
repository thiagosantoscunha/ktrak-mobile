import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosService } from './cursos/cursos.service';
import { AlunoService } from './core/services/aluno.service';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { Dialogs } from '@ionic-native/dialogs';
import { Vibration } from '@ionic-native/vibration/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CursosService,
    AlunoService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    QRScanner
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
