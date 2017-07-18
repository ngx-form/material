// external
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { MdInputDirective } from '@angular/material';
import { FormElementComponent } from '@ngx-form/element';

// internal
import { ElementAbstractClass } from './../element.class';

import template from './input.component.html';

@Component({
  encapsulation: ViewEncapsulation.None,
  template
})
export class FormMaterialInputComponent extends ElementAbstractClass implements AfterViewInit, OnInit {
  @ViewChild('input', { read: MdInputDirective }) input: MdInputDirective;
  @ViewChild('input', { read: ElementRef }) inputElementRef: ElementRef;
  ready = false;
  differ = {};

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    super();
  }

  ngAfterViewInit() {
  }

  ngOnInit() {
    if (this.focus === true) {
      setTimeout(() => {
        this.input.focus();
        this.inputElementRef.nativeElement.focus();
      });
    }
  }
}
