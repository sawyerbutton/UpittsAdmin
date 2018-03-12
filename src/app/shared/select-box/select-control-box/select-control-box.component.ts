import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormGroupDirective} from '@angular/forms';
import { ValidationService} from '../../validation-service/validation.service';
import { SelectAttributes } from '../../shared-control/attributes'

@Component({
  selector: 'app-select-control-box',
  templateUrl: './select-control-box.component.html',
  styleUrls: ['./select-control-box.component.css']
})
export class SelectControlBoxComponent implements OnInit {
  @Input() attrContent : SelectAttributes;

  @Output() selectVal = new EventEmitter<string>();
  selectedValue: string;

  onChange(value: string) {
    this.selectVal.emit(value);
  }


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
    return null;
   }
  }

  get control(){
    return this.formGroupDirective.form.controls[this.attrContent.name]
  }
}
