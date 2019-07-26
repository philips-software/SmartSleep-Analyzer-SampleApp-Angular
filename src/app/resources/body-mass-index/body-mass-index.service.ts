import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {AuthenticationStore} from '../authentication/authentication.store';

@Injectable()
export class BodyMassIndexService {

  /* -- CONSTRUCTOR -- */

  /**
   * Inject any class dependencies that will be used in the class
   * @param _httpClient
   */
  constructor(
    private _authenticationStore: AuthenticationStore,
    private _httpClient: HttpClient
  ) {}

  /* -- PUBLIC METHODS -- */

  /**
   * retrieveBodyMassIndexQuestions
   *
   * This method uses Angular's HttpClient library to perform a get request
   */
  public retrieveBodyMassIndexQuestions(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this._authenticationStore.client.token
      })
    };

    const url = 'https://www.sleepapi.philips.com/smartsleep-analyzer/Scoring/GetRequiredQuestionSenses/bmi';

    return this._httpClient.get<any>(url, httpOptions);
  }

  /**
   * retrieveBodyMassIndexQuestions
   * @param body
   *
   * This method uses Angular's HttpClient library to perform a post request
   * and uses Angular's HttpHeaders library to set request headers
   */
  public postBodyMassIndexAnswers(body: {}): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Cache-Control': 'no-cache',
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + this._authenticationStore.client.token
      })
    };

    const url = 'https://www.sleepapi.philips.com/smartsleep-analyzer/Scoring/ComputeSense/bmi';

    return this._httpClient.post<any>(url, body, httpOptions);
  }

}
