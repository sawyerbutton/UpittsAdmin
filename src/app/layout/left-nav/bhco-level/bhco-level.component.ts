import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../../../shared/shared-control/question.service';

@Component({
  selector: 'app-bhco-level',
  templateUrl: './bhco-level.component.html',
  styleUrls: ['./bhco-level.component.css']
})
export class BhcoLevelComponent implements OnInit {
  questions: any[];

  constructor(service: QuestionService) {
    this.questions = service.getQuestions();
  }

  ngOnInit() {
  }

}
