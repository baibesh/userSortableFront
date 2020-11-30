import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from './interfaces';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  fetch(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/api/user');
  }
}
