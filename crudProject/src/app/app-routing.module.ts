import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from  '../app/home/home.component';
import { EditUserComponent } from '../app/edit-user/edit-user.component';
import { NewUserComponent } from './new-user/new-user.component';
import { AvatarDialogComponent } from './avatar-dialog/avatar-dialog.component';
import { ItemsComponent } from '../app/items/items.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch:'full'
  },
  {
      path: '**', 
      redirectTo: '/home',
      pathMatch: 'full'
  }, 
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'edit-user',
    component: EditUserComponent
  },
  {
    path:'new-user',
    component: NewUserComponent
  },
  {
    path:'avatar',
    component: AvatarDialogComponent
  },
  {
    path:'items',
    component: ItemsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
