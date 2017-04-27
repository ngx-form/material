// external
import { ElementRef, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
const lodash = require('lodash');

// internal
// import { TypeOptionsInterface } from './element.interface';
import { element, input } from '@ngx-form/type';

// class
export abstract class ElementAbstractClass implements OnInit {

  _disabled = false;
  set disabled(disabled: boolean) {
    console.log(disabled);
    if (this.form) {
      if (disabled === false) {
        this.getFormControl().enable();
      } else {
        this.getFormControl().disable();
      };
    }
    this._disabled = disabled;
  };
  get disabled() {
    return this._disabled;
  }

  @Input() element: element;
  protected hint: 'maxlength' | 'minlength' | 'length';
  @Input() key: string;
  @Input() maxlength: number | null = null;
  @Input() minlength: number | null = null;

  /* key
  _key = '';
  @Input() set key(key: string) {
    this._key = key;
  }
  get key(): string { return this._key; }
  */

  _model: any;
  @Input() set model(model: any) {
    console.log(`@Input(model)`, this.model, model);
    this._model = Object.assign({}, this.getKeyModel(model));
    this.originalModel = (!this.originalModel) ? Object.assign({}, model) : this.originalModel;
  }
  get model(): any {
    return this._model;
  }

  @Input() placeholder: string;

  /* options
  _options: TypeOptionsInterface;
  @Input() set options(options: TypeOptionsInterface) { this._options = options; }
  get options(): TypeOptionsInterface { return this._options; }
  */

  /* placeholder
  _placeholder = '';
  @Input() set placeholder(placeholder: string) { this._placeholder = placeholder; }
  get placeholder() { return this._placeholder; }
  */

  // required
  _required = true;
  @Input() set required(required: boolean) {
    this._required = required;
    if (this.form) {
      console.log(`this.formContgetFormControlol()`, this.getFormControl(), this.getFormControl().validator);
      this.getFormControl().setValidators(Validators.compose([
        (required) ? Validators.required : null,
        (this.minlength) ? Validators.minLength(this.minlength) : null,
        (this.maxlength) ? Validators.maxLength(this.maxlength) : null
      ]));
      console.log([
        (this.required) ? Validators.required : null,
        (this.minlength) ? Validators.minLength(this.minlength) : null,
        (this.maxlength) ? Validators.maxLength(this.maxlength) : null
      ]);
      /*
      this.getFormControl().setValidators(Validators.compose([
        (this.required) ? Validators.required : null,
        (this.minlength) ? Validators.minLength(this.minlength) : null,
        (this.maxlength) ? Validators.maxLength(this.maxlength) : null
      ]));
      */
    }
  }
  get required(): boolean { return this._required; }

  _viewValue: Array<any>;
  @Input() set viewValue(viewValue: Array<any>) {
    this._viewValue = viewValue;
  }
  get viewValue() {
    return this._viewValue;
  }

  _originalModel: any;
  set originalModel(originalModel: any) {
    this._originalModel = this.getKeyModel(originalModel);
  }
  get originalModel() {
    return this._originalModel;
  }

  @Output() cancelled: EventEmitter<any>  = new EventEmitter(false);
  @Output() changed: EventEmitter<any>    = new EventEmitter(false);
  @Output() submitted: EventEmitter<any>  = new EventEmitter(false);

  protected errors: any;

  // focused
  protected _focused = false;
  set focused(focused: boolean) { this._focused = focused; }
  get focused(): boolean { return this._focused; }

  protected form: FormGroup;
  protected elementRef: ElementRef;
  protected formBuilder: FormBuilder;

  constructor(
    elementRef: ElementRef,
    formBuilder: FormBuilder
  ) {
    this.formBuilder = formBuilder;
    this.elementRef = elementRef;
  }

  getFormControl(): AbstractControl {
    return this.form.controls[this.key];
  }

  objectGet(object: Object, keys: any) {
    if (keys instanceof Array) {
      let s = '';
      for (let i = 0; i < keys.length; i++) {
        if (lodash.get(object, keys[i])) {
          s = s + ' ' + lodash.get(object, keys[i]);
        }
      }
      return s;
    }
    const value = lodash.get(object, keys);
    if (value === undefined) {
      return keys;
    } else {
      return value;
    }
  }

  // prepare data before emit
  beforeEmit($event?: Event) {
    const model = this.form.value;
    this.model = this.form.value;
    return {
      $event,
      model
    };
  }

  protected getKeyModel(model: any): any {
    const keyModel = {};
    keyModel[this.key] = model[this.key];
    return keyModel;
  }

  protected group(model: any): void {
    const group = {};
    if (model) {
      const key = this.key;
      group[key] = [
        {
          value: model[key],
          disabled: this.disabled
        },
        Validators.compose([
          (this.required) ? Validators.required : null,
          (this.minlength) ? Validators.minLength(this.minlength) : null,
          (this.maxlength) ? Validators.maxLength(this.maxlength) : null
        ])
      ];
      this.form = this.formBuilder.group(group);
    }
  }

  // focus on input
  protected inputFocus() {
    const input = this.elementRef.nativeElement.querySelector('input[mdInput]');
    if (input) {
      input.focus();
      input.onblur = () => {
        this.focused = false;
      };
      input.onfocus = () => {
        this.focused = true;
      };
      // set focus on input
      this.focused = true;
    }
  }

  ngOnInit() {
    this.group(this.model);
  }

  onChange($event: Event): void {
    const changed = Object.assign({}, this.beforeEmit($event), {
      originalModel: Object.assign({}, this.originalModel)
    });
    this.focused = false;
    this.changed.emit(changed);
    this.originalModel = Object.assign(this.model);
  }

  onSubmit($event: Event): void {
    if (this.form.valid) {
      console.log(`onSubmit`, $event);
      this.focused = false;
      this.submitted.emit(this.model);
    } else {
      // this.errors = new ErrorClass(this.form.controls[this.key].errors).init();
    }
    return;
  }

  onFocus($event: any): void { }

  onKeyUp($event: any): void {
    console.log(`onKeyUp`, $event.key);
    if ($event.key === 'Escape') {
      this.cancelled.emit(null);
    }
  }
}
