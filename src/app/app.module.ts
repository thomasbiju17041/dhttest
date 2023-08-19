import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import {AngularFireModule} from '@angular/fire/compat'
import {AngularFireDatabaseModule} from '@angular/fire/compat/database'
export const firebaseConfig = {
    projectId: 'esp32test-ccee2',
    appId: '1:206560167670:web:7b3ff2b82af1eaae9c8ed7',
    databaseURL: 'https://esp32test-ccee2-default-rtdb.firebaseio.com',
    storageBucket: 'esp32test-ccee2.appspot.com',
    apiKey: 'AIzaSyBXWJ2vCbjFN2C6S45kPHRhIeKCFEqhEqg',
    authDomain: 'esp32test-ccee2.firebaseapp.com',
    messagingSenderId: '206560167670',
    measurementId: 'G-3FVFEH70EM',
  }
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
