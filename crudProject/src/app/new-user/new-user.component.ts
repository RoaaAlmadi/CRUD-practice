import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../services/firebase.service';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  user: User = {
    avatar: '',
    age: '',
    name: '',
    surname: '',
  }

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.user.avatar != '' && this.user.age != '' && this.user.name != '' && this.user.surname != ''){
      this.firebaseService.newUser(this.user);
      this.user.avatar = '';
      this.user.age = '';
      this.user.name = '';
      this.user.surname = '';
    }
  }

}
