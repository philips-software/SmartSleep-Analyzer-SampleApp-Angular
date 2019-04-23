import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {BodyMassIndexModule} from './body-mass-index/body-mass-index.module';
import {AuthenticationModule} from './authentication/authentication.module';

const modules = [
  AuthenticationModule,
  BodyMassIndexModule,
  HttpClientModule
];

@NgModule({
  imports: [
    ...modules
  ],
  exports: [
    ...modules
  ]
})
export class ResourcesModule {}
