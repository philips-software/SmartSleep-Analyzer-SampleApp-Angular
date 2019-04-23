import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {AuthenticationStore} from './authentication.store';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  /* -- CONSTRUCTOR -- */

  /**
   * Inject any class dependencies that will be used in the class
   * @param _authenticationStore
   * @param _router
   */
  constructor(
    private _router: Router,
    private _authenticationStore: AuthenticationStore
  ) {}

  /* -- PUBLIC METHODS -- */

  /**
   * canActivate return a boolean if conditions are not met
   * Add this to your routes canActivate property to prevent route access
   * @param route
   * @param state
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this._authenticationStore.client) {
      return true;
    }

    this._router.navigate(['/login']);
    return false;
  }
}
