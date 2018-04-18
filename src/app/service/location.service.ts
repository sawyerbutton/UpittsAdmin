import { Injectable } from '@angular/core';
import {HandleError, HttpErrorHandler} from "./http-error-handler.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {API_URL} from "./http.service";
import {catchError} from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    }
  )
}

@Injectable()
export class LocationService {
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler
  ) {
    this.handleError = httpErrorHandler.createHandleError('LocationService');
  }

  /** GET: get county by state */
  getLocation(location: string, level: string): Observable<{}> {
    return this.http.get<any>(API_URL + '/${level}/${location}')
      .pipe(
        catchError(this.handleError('getLocation', []))
      );
  }

  /** POST: add a new community, block or family to db*/

}
