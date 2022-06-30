import { Directive } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS } from '@angular/forms';

const floatingPointRegex = /^\d+(\.\d{1,2})?$/;
// max 2 decimal places

@Directive({
  selector: '[numberWith2DecimalsValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ValidAmountDirective,
      multi: true,
    },
  ],
})
export class ValidAmountDirective implements Validator {
  validate(control: AbstractControl): { [key: string]: any } | null {
    if (control.value && !(control.value as string).match(floatingPointRegex)) {
      return { 'numberWith2Decimals': true };
    }
    return null;
  }
}
