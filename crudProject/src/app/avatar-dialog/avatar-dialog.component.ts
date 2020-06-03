import { Users } from './../users';
import { FirebaseService } from './../services/firebase.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-avatar-dialog',
  templateUrl: './avatar-dialog.component.html',
  styleUrls: ['./avatar-dialog.component.css']
})
export class AvatarDialogComponent implements OnInit {
  users: Users[];
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.firebaseService.getUsers().subscribe(users => {
      console.log(users);
      // this.users = users as Array<Users>;
    });
  }

}
