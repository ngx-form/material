// external
import { Component, ChangeDetectionStrategy, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdSelect } from '@angular/material';

// internal
import { ElementAbstractClass } from './../element.class';

const template = require('./select.component.html');

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None,
  template
})
export class FormMaterialSelectComponent extends ElementAbstractClass {
  debug = true;

  @ViewChild('select') select: MdSelect;
  @ViewChild('open') open: any;

  _options: any;
  @Input() set options(options: any) { this._options = options; }
  get options(): any { return this._options; }

  constructor(
    formBuilder: FormBuilder,
    elementRef: ElementRef
  ) {
    // super(elementRef, formBuilder);
    super();
    this.focus();
  }

  focus() {
    // this.focused = true;
    if (this.focused === true) {
      setTimeout(() => {
        this.open.nativeElement.click();
      }, 1);
    }
  }

  onClose($event: any): void {
    // this.focused = false;
    // console.log(`onClose`);
    // this.cancelled.emit($event);
    // this.submitted.emit(this.beforeEmit($event));
  }

  onFocus($event: any): void {
    // console.log(`onFocus`, $event);
    // this.submitted.emit(this.beforeEmit($event));
  }
}
