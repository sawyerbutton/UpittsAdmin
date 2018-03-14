import {Component, Input, OnInit} from '@angular/core';
import {QuestionControlService} from '../../../../../shared/shared-control/question-control.service';
import {QuestionBase} from '../../../../../shared/shared-control/questionBase';
import {Form, FormGroup} from '@angular/forms';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-physical-domain',
  templateUrl: './physical-domain.component.html',
  styleUrls: ['./physical-domain.component.css']
})
export class PhysicalDomainComponent implements OnInit {
  @Input() physicalQuestions: QuestionBase<any>[] = [];

  public healthQuestions: QuestionBase<any>[] = [];
  public drugQuestions: QuestionBase<any>[] = [];
  public foodQuestions: QuestionBase<any>[] = [];

  isLinear: true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.physicalQuestions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
