// external
import { Component, ChangeDetectionStrategy, ElementRef, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';

// internal
import { InputAbstractClass } from './input.class';

const template = require('./input.component.html');

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None,
  template
})
export class FormMaterialInputComponent extends InputAbstractClass {

  constructor(
    elementRef: ElementRef,
    formBuilder: FormBuilder
  ) {
    super(elementRef, formBuilder);
    this.focus();
  }
}
