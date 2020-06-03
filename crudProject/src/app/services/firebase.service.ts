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
  user: Observable<User[]>;
  userDoc: AngularFirestoreDocument<User>;
    constructor( public afs: AngularFirestore ) {
      
      this.usersCollection = this.afs.collection('users', ref => ref.orderBy('avatar', 'asc')); //ref is for formating "ascending"

    }
    getUsers(){
      return this.usersCollection.valueChanges();
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

      newUser(user :User){
        this.usersCollection.add(user); //add to fire store
      }

      deleteUser(user){
        this.userDoc = this.afs.doc('users/${user.id}');
        this.userDoc.delete();
      }
}
