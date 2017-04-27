// internal
import { autocomplete, input } from '@ngx-form/type';
import { ElementAbstractClass } from './../element.class';

export abstract class InputAbstractClass extends ElementAbstractClass {

  protected autocomplete: autocomplete;

  debug = true;

  protected hint: 'maxlength' | 'minlength' | 'length';
  protected max: number;
  protected min: number;
  protected type: input;

  focus() {
    setTimeout(() => {
      this.inputFocus();
    }, 1);
  }
}
