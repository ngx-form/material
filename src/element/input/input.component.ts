// external
import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { MdInput } from '@angular/material';
// @ngx
import { FormElementComponent } from '@ngx-form/element';

// internal
import { ElementAbstractClass } from './../element.class';

@Component({
  encapsulation: ViewEncapsulation.None,
  templateUrl: './input.component.html'
})
export class FormMaterialInputComponent extends ElementAbstractClass implements OnInit {
  @ViewChild('input', { read: MdInput }) input: MdInput;
  @ViewChild('input', { read: ElementRef }) inputElementRef: ElementRef;
  ready = false;
  differ = {};

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    super();
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
