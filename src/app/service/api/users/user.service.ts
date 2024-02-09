import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl : string = "https://fakestoreapi.com/"

  constructor(
    private service : HttpClient
  ) { }

  getLimitedUser (limit : number = 5) {
    const url  = this.baseUrl + "users?limit=" +limit
    return this.service.get<any>(url)
  }
}
