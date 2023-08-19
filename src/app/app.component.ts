import { Component } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/compat/database';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  public dht_hum!: Observable<any>[];
  public dht_temp!: Observable<any>[];
  constructor(afDb:AngularFireDatabase){
    const itemsRef1: AngularFireList<any>=afDb.list('DHT_hum')
    itemsRef1.valueChanges().subscribe(
      x=>{this.dht_hum=x;}
      );
    const itemsRef2: AngularFireList<any>=afDb.list('DHT_temp')
    itemsRef2.valueChanges().subscribe(
      y=>{this.dht_temp=y;}
      ); 


}

}

