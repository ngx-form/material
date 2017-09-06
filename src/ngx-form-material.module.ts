// external
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

// @ngx
import { FormElementModule } from '@ngx-form/element';

// internal
import { FormMaterialInputComponent } from './element';
import { elementsConfig } from './ngx-form-material.config'; // get config

@NgModule({
  declarations: [
    FormMaterialInputComponent
  ],
  entryComponents: [
    FormMaterialInputComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormElementModule.forRoot(elementsConfig),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormMaterialModule {}
