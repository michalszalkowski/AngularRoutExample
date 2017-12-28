import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {SettingsComponent} from './profile/settings/settings.component';
import {PasswordComponent} from './profile/password/password.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      {
        path: 'password',
        component: PasswordComponent
      }, {
        path: 'settings',
        component: SettingsComponent
      }
    ]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    SettingsComponent,
    PasswordComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
