import { NgModule } from '@angular/core';

import { PriorityComponent } from './priority.component'
import { SharedModule } from '../shared/shared.module';
import { PriorityRoutingModule } from './priority-routing.module';


@NgModule({
  imports: [
    SharedModule,
    PriorityRoutingModule
  ],
  declarations: [
    PriorityComponent,
    
  ]
})
export class PriorityModule { }
