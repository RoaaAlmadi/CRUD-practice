import { FirebaseService } from './services/firebase.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AvatarDialogComponent } from './avatar-dialog/avatar-dialog.component';
import { NewUserComponent } from './new-user/new-user.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditUserComponent,
    AvatarDialogComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
 	  AngularFirestoreModule,
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
