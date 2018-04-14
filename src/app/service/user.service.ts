import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {HandleError, HttpErrorHandler} from "./http-error-handler.service";
import {Observable} from "rxjs/Observable";
import {Bhcos, Member} from "../model/User";
import {catchError} from "rxjs/operators";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {httpFactory} from "@angular/http/src/http_module";

const API_URL = environment.apiUrl;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'text/plain',
    'Authorization': 'my-auth-token'
  })
}

@Injectable()
export class UserService {
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler
  ) {
    this.handleError = httpErrorHandler.createHandleError('UserService');
  }

  // Get: get members from the server
  getMembers (): Observable<Member[]> {
    return this.http.get<Member[]>(API_URL + '/communityMember')
      .pipe(
        catchError(this.handleError('getMembers', []))
      );
  }

  // Get: using map to match the data

  getBhcos (): Observable<Bhcos[]> {
    return this.http.get<Bhcos[]>(API_URL + '/bhcos')
      .pipe(
        catchError(this.handleError('getBhco', []))
      );
  }

  // getMembersI (): Observable<Member[]> {
  //   return this.http.get<Member[]>(API_URL)
  //     .map(response => {
  //       const mems = response.json();
  //       return mems.map((mem) => new Member(mem));
  //     }).catch(this.handleError);
  // }

  // POST: add a new member to the database
  addMember(mem : Member): Observable<Member> {
    console.log(mem);
    return this.http.post<Member>(API_URL + '/communityMember', mem)
      .pipe(
        catchError(this.handleError('addMember', mem))
      );
  }

  addBhco(bhco : Bhcos): Observable<Bhcos> {
    return this.http.post<Bhcos>(API_URL + '/bhcos', bhco)
      .pipe(
        catchError(this.handleError('addBhco', bhco))
      );
  }

  //PUT: update member on the server, return the updated member upon success
  updateMember(mem: Member): Observable<Member> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.http.put<Member>(API_URL, mem, httpOptions)
      .pipe(
        catchError(this.handleError('updateMember', mem))
      );
  }

}
