import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {AuthenticationStore} from '../../resources/authentication/authentication.store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /* -- CONSTRUCTOR -- */

  constructor(
    private _router: Router,
    private _authenticationStore: AuthenticationStore
  ) {}

  /* -- PROPERTIES -- */

  public form;
  public loading = false;

  private _controls = {
    client_id: new FormControl('', Validators.required),
    client_secret: new FormControl('', Validators.required),
    grant_type: new FormControl('client_credentials')
  };

  /* -- PUBLIC METHODS -- */

  public ngOnInit(): void {
    this._authenticationStore.authenticationEvent$.subscribe(() => this._redirectAfterLogin());
    this.form = new FormGroup(this._controls, { updateOn: 'change' });

    if (this._authenticationStore.client) {
      this._redirectAfterLogin();
    }
  }

  public onSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    this._authenticationStore.login(this.form.value);
  }

  /* -- PRIVATE METHODS -- */

  private _redirectAfterLogin() {
    this.loading = false;
    this._router.navigateByUrl('/body-mass-index');
  }

}
