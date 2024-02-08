import { Component, Input } from '@angular/core';

import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-message-detials',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './message-detials.component.html',
  styleUrl: './message-detials.component.scss'
})
export class MessageDetialsComponent {
  @Input()
  messages : any = {}
}
