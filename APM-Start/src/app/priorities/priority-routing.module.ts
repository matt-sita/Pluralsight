import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PriorityComponent } from './priority.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'priority', component: PriorityComponent },
      {
        path: 'priority/:id',
        //canActivate: [ProductDetailGuard],
        component: PriorityComponent
      },
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class PriorityRoutingModule { }
