import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestDataSource } from './rest-data-source';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private dataSource: RestDataSource
  ) { }

  authenicate(username: string, password: string): Observable<boolean> {
    console.log('AuthService:authenticate');
    return this.dataSource.authenticate(username, password);
  }

  get authenticated(): boolean {
    return this.dataSource.auth_token !== null;
  }

  clear() {
    this.dataSource.auth_token = null;
  }
}
