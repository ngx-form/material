// external
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
// internal
import { FormElementModule } from '@ngx-form/element';
import { FormMaterialInputComponent } from './element';
// get config
import { elementsConfig } from './ngx-form-material.config';

@NgModule({
  declarations: [
    FormMaterialInputComponent
  ],
  entryComponents: [
    FormMaterialInputComponent
  ],
  imports: [
    CommonModule,
    FormElementModule.forRoot(elementsConfig),
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class FormMaterialModule {
  constructor() { }
}
