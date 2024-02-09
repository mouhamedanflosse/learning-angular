import { Routes } from '@angular/router';
import { MessageDetialsComponent } from './message-detials/message-detials.component';
import { MyCompComponent } from './my-comp/my-comp.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';

export const routes: Routes = [
  {
    path : "users",
    component : UsersComponent
  },
  {
    path : "users/:id",
    component : UserDetailsComponent
  },
  {
    path : "",
    component : MyCompComponent
  }
];
