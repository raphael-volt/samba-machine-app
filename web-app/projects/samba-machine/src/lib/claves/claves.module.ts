import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClavesComponent} from "./claves/claves.component";



@NgModule({
  declarations: [ClavesComponent],
  imports: [
    CommonModule
  ],
  exports: [ClavesComponent]
})
export class ClavesModule { }
