import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  private items: Observable<any[]>;

  constructor(private dbFirestore: AngularFirestore) {}

  ngOnInit(): void {
    this.items = this.dbFirestore.collection('items').valueChanges();
  }
}
