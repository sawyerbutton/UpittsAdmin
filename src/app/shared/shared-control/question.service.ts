import { Injectable } from '@angular/core';
import {QuestionBase, RadioQuestion} from './questionBase';
import { DropdownQuestion } from './questionBase';
import { TextboxQuestion } from './questionBase';

@Injectable()
export class QuestionService {
  getQuestions() {
    let questions: QuestionBase<any>[] = [
      new DropdownQuestion({
        key: 'q1',
        label: '1. How many children do you have?',
        placeholder: 'Please select a number',
        options: [
          {value: '0', viewValue: 'None'},
          {value: '1', viewValue: '1 - 2'},
          {value: '2', viewValue: '3 - 4'},
          {value: '3', viewValue: '5 - 6'},
          {value: '4', viewValue: '7 or more'}
        ],
        order: 1
      }),
      new DropdownQuestion({
        key: 'q2',
        label: '2. How many live with you?',
        placeholder: 'Please select a number',
        options: [
          {value: '0', viewValue: 'None'},
          {value: '1', viewValue: '1 - 2'},
          {value: '2', viewValue: '3 - 4'},
          {value: '3', viewValue: '5 - 6'},
          {value: '4', viewValue: '7 or more'}
        ],
        order: 2
      }),
      new DropdownQuestion({
        key: 'q3',
        label: '3. How many people do you currently live with?',
        placeholder: 'Please select a number',
        options: [
          {value: '0', viewValue: '0'},
          {value: '1', viewValue: '1'},
          {value: '2', viewValue: '2'},
          {value: '3', viewValue: '3'},
          {value: '4', viewValue: '4'},
          {value: '5', viewValue: '5 or more'}
        ],
        order: 3
      }),
      new DropdownQuestion({
        key: 'q7',
        label: '7. How many hours do you work per week?',
        options: [
          {value: '0', viewValue: '0'},
          {value: '1', viewValue: 'less than 20'},
          {value: '2', viewValue: '20 - 39'},
          {value: '3', viewValue: '40 or more'}
        ],
        order: 7
      }),
      new DropdownQuestion({
        key: 'q18',
        label: '18. To what extent do you have access to medical care when you need it?',
        options: [
          {value: '0', viewValue: '0'},
          {value: '1', viewValue: '1'},
          {value: '2', viewValue: '2'},
          {value: '3', viewValue: '3'},
          {value: '4', viewValue: '4'},
          {value: '5', viewValue: '5'},
        ],
        order: 18
      }),
      new DropdownQuestion({
        key: 'q22',
        label: '22. What is the appropriate range for your annual household income?',
        options: [
          {value: '0', viewValue: '1,000 - 9,999'},
          {value: '1', viewValue: '10,000 - 19,999'},
          {value: '2', viewValue: '20,000 - 29,999'},
          {value: '3', viewValue: '30,000 - 39,999'}
        ],
        order: 18
      }),


      //radio button questions
      new RadioQuestion({
        key: 'q4',
        label: '4. Do you own a home?',
        options: [
          {value: 'Yes'},
          {value: 'No'},
        ],
        order: 4
      }),

      new RadioQuestion({
        key: 'q5',
        label: '5. Do you rent?',
        options: [
          {value: 'Yes'},
          {value: 'No'},
        ],
        order: 5
      }),

      new RadioQuestion({
        key: 'q6',
        label: '6. Are you employed?',
        options: [
          {value: 'Yes'},
          {value: 'No'},
        ],
        order: 6
      }),

      new RadioQuestion({
        key: 'q8',
        label: '8. Have you served in the Armed Forces?',
        options: [
          {value: 'Yes'},
          {value: 'No'},
        ],
        order: 8
      }),
      new RadioQuestion({
        key: 'q9',
        label: '9. Did you graduated from high school or have a GED?',
        options: [
          {value: 'Yes'},
          {value: 'No'},
        ],
        order: 9
      }),
      new RadioQuestion({
        key: 'q10',
        label: '10. Do you have a valid diver license?',
        options: [
          {value: 'Yes'},
          {value: 'No'},
        ],
        order: 10
      }),
      new RadioQuestion({
        key: 'q11',
        label: '11. Do you have a current id in your possession?',
        options: [
          {value: 'Yes'},
          {value: 'No'},
        ],
        order: 11
      }),
      new RadioQuestion({
        key: 'q12',
        label: '12. Do you own a working car with car insurance?',
        options: [
          {value: 'Yes'},
          {value: 'No'},
        ],
        order: 12
      }),
      new RadioQuestion({
        key: 'q13',
        label: '13. Do you have a felony record?',
        options: [
          {value: 'Yes'},
          {value: 'No'},
        ],
        order: 13
      }),
      new RadioQuestion({
        key: 'q14',
        label: '14. Are you on probation or parole?',
        options: [
          {value: 'Yes'},
          {value: 'No'},
        ],
        order: 14
      }),
      new RadioQuestion({
        key: 'q15',
        label: '15. Do you have a bank account?',
        options: [
          {value: 'Yes'},
          {value: 'No'},
        ],
        order: 15
      }),
      new RadioQuestion({
        key: 'q16',
        label: '16. Are you scared or worried about anyone being released from jail?',
        options: [
          {value: 'Yes'},
          {value: 'No'},
        ],
        order: 16
      }),
      new RadioQuestion({
        key: 'q17',
        label: '17. Do you currently have a health insurance?',
        options: [
          {value: 'Yes'},
          {value: 'No'},
        ],
        order: 17
      }),

      //text input question
      new TextboxQuestion({
        key: 'q19',
        label: '19. How long has it been since your most recent visit to a healthcare provider outside of the Emergency Room?',
        order: 19
      }),
      new TextboxQuestion({
        key: 'q20',
        label: '20. How long has it been since you have a dentist?',
        order: 20
      }),
      new TextboxQuestion({
        key: 'q21',
        label: '21. What is your actual range of income?',
        order: 21
      }),
      new TextboxQuestion({
        key: 'q23',
        label: '23. What church or house of worship do you attend?',
        order: 23
      }),



    ];
    return questions.sort((a, b) => a.order - b.order);
  }

}
