import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { User } from './interfaces'
import {UsersService} from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users$: Observable<User[]>;
  searchText = '';

  constructor(private users: UsersService) {
  }

  ngOnInit(): void {
    this.users$ = this.users.fetch();
  }
}
