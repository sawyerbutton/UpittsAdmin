import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {HandleError, HttpErrorHandler} from "./http-error-handler.service";
import {Observable} from "rxjs/Observable";
import {DemoQuestion, QuestionBase, Questionnare} from "../model/questionBase";
import {API_URL} from "./http.service";
import {catchError} from "rxjs/operators";
import {ObjectUnsubscribedError} from "rxjs/Rx";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
    }
  )
}

@Injectable()
export class QuestionModelService {
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler
  ) {
    this.handleError = httpErrorHandler.createHandleError('QuestionsService');
  }

  /**GET: get all the demographic questions from the server*/
  getDemoQsuestions(): Observable<DemoQuestion[]> {
    return this.http.get<DemoQuestion[]>(API_URL+'/demographic')
      .pipe (
        catchError(this.handleError('getQuestions', []))
      );
  }

  getQuestionnaire(): Observable<Questionnare[]> {
    return this.http.get<Questionnare[]>(API_URL + '/questionnaire')
      .pipe (
        catchError(this.handleError('getQuestionnaire', []))
      );
  }

  /** GET; get single questions by id*/
  getQuesById(id: number): Observable<{}> {
    return this.http.get<any>(API_URL + '/demographic/${id}')
      .pipe(
        catchError(this.handleError('getQueById', []))
    );
  }

  /** POST: add a new demographic question to the database*/
  addDemoQues(ques: DemoQuestion): Observable<DemoQuestion> {
    return this.http.post<DemoQuestion>(API_URL + '/demographic', ques, httpOptions)
      .pipe(
        catchError(this.handleError('addQuestion', ques))
      );
  }

  addQuestionnaire(ques: Questionnare): Observable<Questionnare> {
    return this.http.post<Questionnare>(API_URL + '/questionnaire', ques, httpOptions)
      .pipe(
        catchError(this.handleError('addQuestionnaire', ques))
      );
  }

  /**PUT: update question des or ans on the server*/
  updateQues(id: number): Observable<{}> {
    httpOptions.headers = httpOptions.headers.set(
      'Authorization', 'my-new-auth-token'
    );

    return this.http.put<any>(API_URL + '/demographic/${id}', id, httpOptions)
      .pipe(
        catchError(this.handleError('updateQuestions', id))
      );
  }

}
