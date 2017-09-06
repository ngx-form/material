
// external
import { FormElementConfig } from '@ngx-form/element';

// internal
import { FormMaterialInputComponent } from './element';

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
