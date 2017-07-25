// external
import { ElementRef, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
const _ = require('lodash');
// import { get } from 'lodash';

// internal
import { element } from '@ngx-form/type';

import { MdInputAttributesInterface } from '@ngx-form/interface';

/**
 * Class with global html attributes used in almost every html element
 * @export
 * @abstract
 * @class ElementAbstractClass
 * @implements {OnInit}
 */
export abstract class ElementAbstractClass {
  attributes: MdInputAttributesInterface;
  element: element;
  error: Object;
  focus: boolean;
  formGroup: FormGroup;
  formControlName: string;
  key: string;
  model: any;
  originalModel: any = null;
  viewValue: Array<any>;

  get isValid() {
    return this.formGroup.controls[this.key].valid;
  }

  @Output() cancelled: EventEmitter<any> = new EventEmitter();
  @Output() changed: EventEmitter<any> = new EventEmitter();
  @Output() submitted: EventEmitter<any> = new EventEmitter();

  constructor() { }

  onChange($event: Event): void {
    this.changed.emit(this.model);
  }

  onSubmit($event: Event): void {
    if (this.formGroup.valid) {
      this.submitted.emit(this.model);
    }
  }

  onFocus($event: any): void { }
  onKeyPress($event: any): void { }
  onKeyUp($event: any): void {
    if ($event.key === 'Escape') {
      this.cancelled.emit(null);
    }
  }
}
