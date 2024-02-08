import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { MessageDetialsComponent } from '../message-detials/message-detials.component';

@Component({
  selector: 'app-my-comp',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor,MessageDetialsComponent],
  templateUrl: './my-comp.component.html',
  styleUrl: './my-comp.component.scss',
})
export class MyCompComponent {
  name: string = 'mouhamed';
  email: string = 'name@gmail.com';
  message: string = 'message';
  isSubmitted: boolean = false;
  messages: Array<any> = [];

  onSubmit(): void {
    this.isSubmitted = true;
    // console.log(this.name, this.email, this.message);
    this.messages.push({
      name: this.name,
      email: this.email,
      message: this.message,
    });
  }
}
