import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {InputAttributes, SelectAttributes} from "../shared/shared-control/attributes";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})

export class CreateQuestionComponent implements OnInit {
  public createQuesForm: FormGroup;

  public description : InputAttributes = {name:'desp',min:4,max:32,placeholder:'Please input question description', type: 'text'};
  public hints : InputAttributes = {name:'hint',min:4,max:32,placeholder:'Please input question indication', type: 'text'};
  public order: InputAttributes = {name: 'ord', min:1, max: 20, placeholder:'Please input question order', type: 'number'};
  public type :SelectAttributes = {name:'types',roles: questionType, placeholder:'Select question type'};
  public ansNumber: InputAttributes = {name: 'ansNo', min:1, max: 20, placeholder: 'Please input the number of answers', type: 'number'};
  public inputKey: InputAttributes = {name: 'key', min: 4, max: 20, placeholder: 'Please input answer extent', type: 'text'};
  public inputValue: InputAttributes = {name: 'value', min: 4, max: 20, placeholder: 'PLease input answer description', type: 'text'};

  despPara: string;
  hintPara: string;
  orderPara: number;
  typePara: string;
  ansNumPara: number;
  keyPara: string;
  valuePara: string;

  numbers: number[];

  constructor(public fb: FormBuilder) {

  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.createQuesForm = this.fb.group({
      desp: ['', [Validators.required]],
      hint:['',[Validators.required,Validators.minLength(4)]],
      ord:['',[Validators.required,Validators.minLength(1)]],
      types:['',[Validators.required,Validators.minLength(4)]],
      ansNo: ['', [Validators.required, Validators.minLength(1)]],
      key: ['', [Validators.required, Validators.minLength(1)]],
      value: ['', [Validators.required, Validators.minLength(1)]]
    })
  }

  getDescription(value:string){
    if(value){
      this.despPara = value;
      //console.log("username:"+this.userNamePara);
    }
  }

  getHint(value: string) {
    if (value) {
      this.hintPara = value;
    }
  }

  getOrder(value: number) {
    if(value) {
      this.orderPara = value;
    }
  }

  getType(value: string) {
    if (value) {
      this.typePara = value;
    }
  }

  getAnsNumber(value: number) {
    if (value) {
      this.ansNumPara = value;
      this.numbers = Array.apply(null, {length: this.ansNumPara}).map(Number.call, Number);
    }
  }

  keyArray: string[] = [];
   getKey(value: string) {
     if(value) {
       this.keyPara = value;
      this.keyArray.push(this.keyPara);
     }
   }

  valueArray: string[] = [];
  getValue(value: string) {
    if (value) {
      this.valuePara = value;
      this.valueArray.push(this.valuePara)
    }
  }
}

export const questionType = [
  {value: 'Radio Button Question', viewValue:'Radio Button Question'},
  {value: 'Text Input Question', viewValue:'Text Input Question'},
  {value: 'Dropdown List Question', viewValue:'Dropdown List Question'},
];

export class options {
  key: string;
  value: string;
}
