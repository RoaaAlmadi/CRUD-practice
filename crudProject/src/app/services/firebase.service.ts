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
   }
}
