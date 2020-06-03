import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../services/firebase.service';
import { Users } from '../users';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  crudForm: FormGroup;

  constructor(private firebaseService: FirebaseService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
  }

  onSubmit(value){
      this.firebaseService.newUser(value);

  }

  createForm() {
    this.crudForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      age: ['', Validators.required],
      avatar: ['', Validators.required]
    })
   }



}
