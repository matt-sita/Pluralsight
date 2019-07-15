import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent }, //Default route
      { path: '', redirectTo: 'welcome', pathMatch: 'full' }, //Empty route
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }, //Wilcard route for anything not listed above
    ])
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
