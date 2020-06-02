import { FirebaseService } from './../services/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 

  constructor(public firebaseService: FirebaseService) { }

  ngOnInit(): void {
   this.showlist()
  }
  showlist(){
    this.firebaseService.getusers().subscribe(users =>{
      console.log(users)
    })

  }
}
