// external
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

// internal
import { FormMaterialInputComponent, FormMaterialSelectComponent } from './element';

@NgModule({
  entryComponents: [
    FormMaterialInputComponent,
    FormMaterialSelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class FormMaterialModule { }
