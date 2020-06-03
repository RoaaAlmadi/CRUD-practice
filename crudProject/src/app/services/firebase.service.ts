import { Users } from './../users';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  userCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  
  constructor(public afs: AngularFirestore) {
    
   }
   getUsers(){
     return this.afs.collection('users').valueChanges();
   }
}
