import { Directive } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[noWhiteSpaceValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: NoWhiteSpaceDirective,
      multi: true,
    },
  ],
})
export class NoWhiteSpaceDirective implements Validator {
  validate(control: AbstractControl): { [key: string]: any } | null {
    if ((control.value as string)?.trim() === '') {
      return { noWhiteSpace: true };
    }
    return null;
  }
}
