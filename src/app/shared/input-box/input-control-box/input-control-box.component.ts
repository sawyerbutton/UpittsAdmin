import { Component, OnInit, Input } from '@angular/core';
import { FormGroupDirective} from '@angular/forms';
import { ValidationService} from '../../validation-service/validation.service';
import { InputAttributes } from '../../shared-control/attributes'
@Component({
  selector: 'app-input-control-box',
  templateUrl: './input-control-box.component.html',
  styleUrls: ['./input-control-box.component.css']
})
export class InputControlBoxComponent implements OnInit {
  @Input() attrContent : InputAttributes;


  constructor(
    private formGroupDirective:FormGroupDirective
  ) { }

  ngOnInit() {
  }

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }

    return null;
  }
  get control(){
    return this.formGroupDirective.form.controls[this.attrContent.name]
  }
}
