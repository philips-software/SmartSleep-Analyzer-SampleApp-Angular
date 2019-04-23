import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BodyMassIndexComponent} from './components/body-mass-index/body-mass-index.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {AuthenticationGuard} from './resources/authentication/authentication.guard';

/**
 * Create routes here and inject into RouterModule below in imports
 */
const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'body-mass-index',
    canActivate: [AuthenticationGuard],
    component: BodyMassIndexComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 0]
    })
  ],
  providers: []
})
export class AppRoutingModule {}
