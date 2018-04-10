import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {users} from "./Users";

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<users[]>('/api/users');
  }

  getById(id: number) {
    return this.http.get('/api/users/' + id);
  }

  create(user: users) {
    return this.http.post('/api/users', user);
  }

  update(user: users) {
    return this.http.put('/api/users/' + user.id, user);
  }

  delete(id: number) {
    return this.http.delete('/api/users/' + id);
  }

}
