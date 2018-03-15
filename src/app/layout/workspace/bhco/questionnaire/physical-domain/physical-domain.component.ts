import {Component, Input, OnInit} from '@angular/core';
import {QuestionControlService} from '../../../../../shared/shared-control/question-control.service';
import {QuestionBase} from '../../../../../shared/shared-control/questionBase';
import {Form, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-physical-domain',
  templateUrl: './physical-domain.component.html',
  styleUrls: ['./physical-domain.component.css']
})
export class PhysicalDomainComponent implements OnInit {
  //@Input() physicalQuestions: QuestionBase<any>[] = [];

  @Input() health: QuestionBase<any>[] = [];
  @Input() drug: QuestionBase<any>[] = [];
  @Input() food: QuestionBase<any>[] = [];
  @Input() mobility: QuestionBase<any>[] = [];


  isLinear: true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  forthFormGroup: FormGroup;

  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) { }

  ngOnInit() {
    this.firstFormGroup = this.qcs.toFormGroup(this.health);
    this.secondFormGroup = this.qcs.toFormGroup(this.mobility);
    this.thirdFormGroup = this.qcs.toFormGroup(this.drug);
    this.forthFormGroup = this.qcs.toFormGroup(this.food);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
