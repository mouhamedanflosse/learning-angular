import { Component, OnInit } from '@angular/core';
import { UserComponent } from './user/user.component';
import { NgFor } from '@angular/common';
import { UsersService } from '../service/users.service';
import { UserService } from '../service/api/users/user.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UserComponent,NgFor],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  users: any = [];
  constructor(
    private service : UserService
  ) {

  }
  ngOnInit(): void {
    this.service.getLimitedUser().subscribe({
      next: (data) => {
        this.users = data
      },
    });
}
}
