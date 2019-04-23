import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

import {AuthenticationService} from './authentication.service';
import {Client} from './authentication.types';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationStore {

  /* -- CONSTRUCTOR -- */

  /**
   * Inject any class dependencies that will be used in the class
   * @param _authenticationServices
   */

  constructor(
    private _authenticationService: AuthenticationService,
  ) {}

  /* -- EVENTS -- */

  /**
   * Create subjects to act as event emitters - Subject extends Observable
   */

  private _authenticationEvent = new Subject();

  /* -- PROPERTIES -- */

  /**
   * Create public properties of the event emitter for other components to subscribe to
   */

  public authenticationEvent$ = this._authenticationEvent.asObservable();

  /**
   * Create properties on the class - stores are singletons so
   * these properties will be available for life of the app
   */

  private _client: Client;

  /* -- GETTERS -- */

  /**
   * Use getters to expose private class properties to other classes
   */

  public get client(): Client {
    return this._client;
  }

  /* -- PUBLIC METHODS -- */

  /**
   * Login client
   *
   * login returns an Observable from AuthenticationServices
   * that this method can subscribe to
   *
   * Once the Observable resolves, the method sets the property to the class and
   * fires an event to alert listening components who can then query property with getter
   */
  public login(login: Client) {
    this._authenticationService.login(login).subscribe(
      response => {
        const client = new Client();
        client.token = response.access_token;
        this._client = client;

        this._authenticationEvent.next();
      }
    );

  }

}
