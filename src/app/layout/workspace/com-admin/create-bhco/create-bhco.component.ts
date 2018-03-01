import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-bhco',
  templateUrl: './create-bhco.component.html',
  styleUrls: ['./create-bhco.component.css']
})
export class CreateBhcoComponent implements OnInit {

  firstFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
  }

}
