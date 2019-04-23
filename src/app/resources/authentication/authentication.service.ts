import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

import {Observable} from 'rxjs';

@Injectable()
export class AuthenticationService {

  /* -- CONSTRUCTOR -- */

  /**
   * Inject any class dependencies that will be used in the class
   * @param _httpClient
   */
  constructor(
    private _httpClient: HttpClient
  ) {}

  /* -- PUBLIC METHODS -- */

  /**
   * login
   * @param body
   *
   * This method uses Angular's HttpClient library to perform a post request
   * and uses Angular's HttpHeaders library to set request headers
   */
  public login(body: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    const formData = new HttpParams({
      fromObject : {
        'client_id': body.client_id,
        'client_secret': body.client_secret,
        'grant_type': 'client_credentials'
      }
    });

    const url = 'https://philips-prod.apigee.net/oauth/accessToken';

    return this._httpClient.post<any>(url, formData, httpOptions);
  }


}
