import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { MessageDetialsComponent } from '../message-detials/message-detials.component';
import { MyService } from '../service/my.service';

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
  private service  = inject(MyService)

  constructor (
    // private service : MyService
    ) {
    this.messages = this.service.getAllMsg()
    this.isSubmitted = this.service.messages.length > 0
  }

  onSubmit(): void {
    this.isSubmitted = true;
    this.service.addMsg({
        name: this.name,
        email: this.email,
        message: this.message,
      })
    // this.messages.push({
    //   name: this.name,
    //   email: this.email,
    //   message: this.message,
    // });
  }
  deleteCard (index : number) {
    this.messages.splice(index,1)
  }
}
