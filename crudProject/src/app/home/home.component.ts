import { Users } from './../users';
import { FirebaseService } from './../services/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
users: Users[];
  constructor(public firebaseService: FirebaseService) { }

  ngOnInit(): void {
   this.showlist()
   
  }
  
  showlist(){
    this.firebaseService.getUsers().subscribe(data =>{
   
      this.users = data.map(res =>{
        return{
          id: res.payload.doc.id,
          name: res.payload.doc.data()['name'],
          surname: res.payload.doc.data()['surname'],
          age: res.payload.doc.data()['age'],
          avatar: res.payload.doc.data()['avatar']
       }
      })
    })

  }

  deleteUser(user: Users){
    this.firebaseService.deleteUser(user.id);
  }

}
