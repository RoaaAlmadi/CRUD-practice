import { Users } from './../users';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestoreCollectionGroup } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from 'firebase';



@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  usersCollection: AngularFirestoreCollection<Users>;
  
  users: Users[];
  userDoc: AngularFirestoreDocument<User>;
    constructor( public afs: AngularFirestore ) {
      
      this.usersCollection = this.afs.collection('users', ref => ref.orderBy('avatar', 'asc')); //ref is for formating "ascending"

    }
    getUsers(){
      //return this.usersCollection.valueChanges();
        //this.users = this.afs.usercollection.snapshotChanges().pipe(
        // map(actions => actions.map(a => {
        //   const data = a.payload.doc.data() as User;
        //   const id = a.payload.doc.id;
          //  return data;
        // }))
        //); 
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
        // this.userDoc = this.afs.doc('users/${user.id}');
        // this.userDoc.delete();
      }
}
