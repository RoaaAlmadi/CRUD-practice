import { Users } from './../users';
import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
=======
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestoreCollectionGroup } from '@angular/fire/firestore';
>>>>>>> devolp
import { Observable } from 'rxjs';
import { User } from 'firebase';



@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
<<<<<<< HEAD
  userCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  
  constructor(public afs: AngularFirestore) {
    
   }
   getUsers(){
     return this.afs.collection('users').valueChanges();
   }
=======
  usersCollection: AngularFirestoreCollection<Users>;
  
  users: Users[];
  userDoc: AngularFirestoreDocument<User>;
    constructor( public afs: AngularFirestore ) {
      
      this.usersCollection = this.afs.collection('users', ref => ref.orderBy('avatar', 'asc')); //ref is for formating "ascending"

    }
    getUsers(){
        return this.afs.collection('users').snapshotChanges()
      }



      newUser(value){ //value {age, name, surname, avatar}
        this.afs.collection('users').add({
          name: value.name,
          surname: value.surname,
          age: value.age,
          avatar: value.avatar
        }); //add to fire store
      }

      deleteUser(keyID){
        this.afs.collection('users').doc(keyID).delete();
      }
>>>>>>> devolp
}
