import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseApiUrl: String = environment.baseApiUrl;

  constructor(private http:HttpClient) { }
  getUserData() {
    alert("this is get user data alert box");
  }
}
