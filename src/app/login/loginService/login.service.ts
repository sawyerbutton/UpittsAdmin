import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Users} from "./Users";
import {Observable} from "rxjs/Observable";
import {catchError} from "rxjs/operators";
import {ErrorObservable} from "rxjs/observable/ErrorObservable";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Users[]>('/api/users');
  }

  getById(id: number) {
    return this.http.get('/api/users/' + id);
  }

  create(user: Users) {
    return this.http.post('/api/users', user);
  }

  update(user: Users) {
    return this.http.put('/api/users/' + user.id, user);
  }

  addUser (user: Users): Observable<Users> {
    return this.http.post<Users>('/api/users/', user, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  };

  delete(id: number) {
    return this.http.delete('/api/users/' + id);
  }

}
