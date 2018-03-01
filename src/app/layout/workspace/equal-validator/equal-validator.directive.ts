import { Directive, Input  } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[validateEqual]',
  providers: [ { provide: NG_VALIDATORS, useExisting: EqualValidatorDirective, multi: true}]
})
export class EqualValidatorDirective implements Validator {

  @Input()validateEqual: string;
  @Input()reverse: boolean;
  constructor() { }

  validate(control: AbstractControl): { [key: string]: any } {
    //current control's value
    let selfValue = control.value;

    // the value of current component, get the value from attribute
    let targetControl = control.root.get(this.validateEqual);
    // if the value is not equal
    if (targetControl && selfValue !== targetControl.value ) {
      if(!this.reverse){
        return {
          validateEqual: false
        }
      }else{
        targetControl.setErrors({
          validateEqual: false
        })
      }
    }else{
      targetControl.setErrors(null);// value is equal return null
    }
    return null;
  }
}
