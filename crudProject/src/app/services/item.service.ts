import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Item } from '../models/item';


@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemsCollection: AngularFirestoreCollection<Item>;
  items: Item[];
  itemDoc: AngularFirestoreDocument<Item>;

  constructor(public afs: AngularFirestore) {
      this.itemsCollection = this.afs.collection('items', ref => ref.orderBy('title', 'asc')); 

    // this.items = this.afs.collection('items').valueChanges();
   }

   getItems() {
      return this.afs.collection('items').snapshotChanges();
   }

   addItem(value){ //value {title, description}
      this.afs.collection('items').add({
        title: value.title,
        description: value.description,
      }); //add to fire store
  }
    
    deleteItem(keyID){
      this.afs.collection('items').doc(keyID).delete();
  }
  
}
