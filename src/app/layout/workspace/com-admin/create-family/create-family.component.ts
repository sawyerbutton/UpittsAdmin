import { Component, OnInit } from '@angular/core';
import { family} from './family-model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-family',
  templateUrl: './create-family.component.html',
  styleUrls: ['./create-family.component.css']
})
export class CreateFamilyComponent implements OnInit {
  public family: family = new family();
  public firstFormGroup: FormGroup;
  public formErrors = {
    familyName: '',
    block: ''
  };

  public validationMessages = {
    'familyName': {
      'required': 'Family name must include last name, mid name and last name.',
      'minlength': 'Family name must be in 10-32 characters.',
      'maxlength': 'Family must be in 10-32 characters.'
    }
  };

  constructor(
    public fb: FormBuilder,
  ) { }

  ngOnInit(){
    this.firstFormGroup = this.fb.group({
      "block": ['', Validators.required],
      "familyName": [
        this.family.familyName,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(32)
        ]
      ]
    });
    this.firstFormGroup.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.firstFormGroup) {
      return;
    }
    const form = this.firstFormGroup;
    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }


}
