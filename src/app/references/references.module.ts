import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { ReferencesRoutingModule } from './references-routing.module';
import { ReferencesComponent } from './references.component';



@NgModule({
  declarations: [ReferencesComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReferencesRoutingModule
  ]
})
export class ReferencesModule { }
