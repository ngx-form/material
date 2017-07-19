
import { FormMaterialInputComponent } from './element';
import { FormElementConfig } from '@ngx-form/element';

export const elementsConfig: FormElementConfig = {
  elements: [
    { name: 'input', component: FormMaterialInputComponent }
  ],
  errorMessages: {
    required: {
      default: 'This field is required'
    }
  }
}
