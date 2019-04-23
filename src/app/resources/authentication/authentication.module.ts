import {NgModule} from '@angular/core';

import {AuthenticationService} from './authentication.service';

@NgModule({
  providers: [
    AuthenticationService
  ]
})
export class AuthenticationModule {}
