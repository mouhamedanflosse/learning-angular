import { Component, Input, OnInit, input } from '@angular/core';
import { UserService } from '../../service/api/users/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent  {
  constructor(private service: UserService) {}
  @Input()
  userData: any = [];

  }
