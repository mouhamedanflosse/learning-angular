import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-message-detials',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './message-detials.component.html',
  styleUrl: './message-detials.component.scss',
})
export class MessageDetialsComponent implements OnInit {
  @Input()
  message: any = {};
  params: string = '123abc';
  query: any = {};

  @Input()
  index: number = -1;

  logIndex() {
    console.log(this.index);
  }
  @Output()
  delete: EventEmitter<number> = new EventEmitter<number>();

  deleteItem() {
    this.delete.emit(this.index);
  }
  constructor(private activatedRoute: ActivatedRoute) {
    console.log('success');
    this.params = this.activatedRoute.snapshot.params['id'];
    this.query = this.activatedRoute.snapshot.queryParams;
    console.log(this.query.name);
  }
  ngOnInit(): void {
    console.log(this.params);
  }
}
