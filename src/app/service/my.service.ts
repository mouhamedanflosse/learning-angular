import { Injectable } from '@angular/core';

@Injectable()
// @Injectable({
//   providedIn: 'root',
// })

export class MyService {
  messages: any[] = [];
  init() : void{
    this.addMsg({ email: "me@email.com", name: "me", message: "MESSAGE" })
  }
  addMsg(message: { email: string, name: string, message: string }): void {
    this.messages.push(message);
  }

  getAllMsg(): any[] {
    return this.messages;
  }

  deleteMsg(index: number) {
    this.messages.splice(index, 1);
  }

  constructor() {
    this.init()
}

}
