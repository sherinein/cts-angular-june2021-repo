import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/model/user';
import { Observable } from 'rxjs';
import{ map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

private baseUrl='https://reqres.in/api/users';

  constructor(private httpClient:HttpClient) { }
/*
  getAllUser():Observable<User>{
   return this.httpClient.get(this.baseUrl)
                         .pipe(map(res => res.data));
  }
  */
  
}
