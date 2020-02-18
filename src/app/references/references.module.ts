import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferencesRoutingModule } from './references-routing.module';
import { ReferencesComponent } from './references.component';


@NgModule({
  declarations: [ReferencesComponent,],
  imports: [
    CommonModule,
    ReferencesRoutingModule
  ]
})
export class ReferencesModule { }
