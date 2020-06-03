import { Users } from './../users';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestoreCollectionGroup } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
UsersCollection: AngularFirestoreCollection<Users>;
user: Observable<User[]>;
  constructor( public afs: AngularFirestore ) {
    
   }
   getUsers(){
     return this.afs.collection('users').valueChanges();
      //this.users = this.afs.usercollection.snapshotChanges().pipe(
       // map(actions => actions.map(a => {
       //   const data = a.payload.doc.data() as User;
       //   const id = a.payload.doc.id;
        //  return data;
       // }))
      //); 
      //this.users = this.afs.collection('users').snapshotChanges().map(changes => {
        //return changes.map(a => {
         // const data = a.payload.doc.data() as User;
         // data.id = a.payload.doc.id;
         // return data;
        //})
        
      //})
    }
}
