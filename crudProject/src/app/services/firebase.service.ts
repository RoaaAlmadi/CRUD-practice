import { Users } from './../users';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
user: Observable<User>
  constructor( public afs: AngularFirestore ) {
    
   }
   getusers(){
     return   this.afs.collection('users').valueChanges();
   }
}
