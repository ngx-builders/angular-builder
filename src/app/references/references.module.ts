import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferencesRoutingModule } from './references-routing.module';
import { ReferencesComponent } from './references.component';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [ReferencesComponent],
  imports: [
    CommonModule,
    ReferencesRoutingModule,
    MatListModule
  ]
})
export class ReferencesModule { }
