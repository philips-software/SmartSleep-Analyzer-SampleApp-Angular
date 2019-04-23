import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {BodyMassIndexComponent} from './components/body-mass-index/body-mass-index.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {ResourcesModule} from './resources/resources.module';

@NgModule({
  declarations: [
    AppComponent,
    BodyMassIndexComponent,
    HomeComponent,
    LoginComponent
  ],
  exports: [
    ReactiveFormsModule,
    RouterModule
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ResourcesModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
