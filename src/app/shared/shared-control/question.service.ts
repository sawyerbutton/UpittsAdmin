import { Injectable } from '@angular/core';
import {QuestionBase, RadioQuestion} from './questionBase';
import { DropdownQuestion } from './questionBase';
import { TextboxQuestion } from './questionBase';

@Injectable()
export class QuestionService {
  getHealthq() {
    let question: QuestionBase<any>[] = [
      new RadioQuestion({
        key: 'q1',
        label: '1. How would you rate your overall health on a scale of 1(very poor health) - 4(excellent health)?',
        options: [
          {value: '1'},
          {value: '2'},
          {value: '3'},
          {value: '4'},
        ],
        order: 1,
        domain: 'physical',
        subdomain: 'health'
      }),
      new RadioQuestion({
        key: 'q2',
        label: '2. To what extent do you feel that physical pain prevents you from what you need to do?',
        options: [
          {value: '1'},
          {value: '2'},
          {value: '3'},
          {value: '4'},
          {value: '5'},
          {value: '6'},
          {value: '7'},
          {value: '8'},
        ],
        order: 2,
        domain: 'physical',
        subdomain: 'health',
      }),
      new RadioQuestion({
        key: 'q3',
        label: '3. Do you have enough energy for everyday activities?',
        options: [
          {value: 'Yes'},
          {value: 'No'}
        ],
        order: 3,
        domain: 'physical',
        subdomain: 'health'
      }),
      new RadioQuestion({
        key: 'q4',
        label: '4. Do you take prescribed medications? (If no, skip the next question)',
        options: [
          {value: 'Yes'},
          {value: 'No'}
        ],
        order: 4,
        domain: 'physical',
        subdomain: 'health'
      }),
      new RadioQuestion({
        key: 'q5',
        label: '5. Are there times when you do not take your prescribed meds when you are supposed to? (due to cost, access, etc.)?',
        options: [
          {value: 'Yes'},
          {value: 'No'}
        ],
        order: 5,
        domain: 'physical',
        subdomain: 'health'
      }),
      new RadioQuestion({
        key: 'q6',
        label: '6. Do you feel rested upon awaking? ',
        options: [
          {value: 'Yes'},
          {value: 'No'}
        ],
        order: 6,
        domain: 'physical',
        subdomain: 'health'
      }),
      new RadioQuestion({
        key: 'q7',
        label: '7. Is your sleep interrupted?',
        options: [
          {value: 'Yes'},
          {value: 'No'}
        ],
        order: 7,
        domain: 'physical',
        subdomain: 'health'
      }),
      new RadioQuestion({
        key: 'q8',
        label: '8. Do you have nightmares?',
        options: [
          {value: 'Yes'},
          {value: 'No'}
        ],
        order: 8,
        domain: 'physical',
        subdomain: 'health'
      }),
      new RadioQuestion({
        key: 'q9',
        label: '9. In the last month, how often have you felt stressed?',
        options: [
          {value: '0'},
          {value: '1'},
          {value: '2'},
          {value: '3'},
          {value: '4'},
          {value: '5'},
          {value: '6'},
          {value: '7'},
          {value: '8'},
          {value: '9'}
        ],
        order: 9,
        domain: 'physical',
        subdomain: 'health'
      })
    ];
    return question.sort((a, b) => a.order - b.order);
  }

  getMobilityq() {
    let question: QuestionBase<any>[] = [
      new RadioQuestion({
        key: 'q10',
        label: '10. Do you have difficulty performing daily tasks?  (For example, cooking, bathing, getting dressed?)',
        options: [
          {value: 'Yes'},
          {value: 'No'}
        ],
        order: 10,
        domain: 'physical',
        subdomain: 'mobility'
      }),
      new RadioQuestion({
        key: 'q11',
        label: '11. Have you found that you are doing tasks less frequently?',
        options: [
          {value: 'Yes'},
          {value: 'No'}
        ],
        order: 11,
        domain: 'physical',
        subdomain: 'mobility'
      }),
      new RadioQuestion({
        key: 'q12',
        label: '12. Have you found that you are doing tasks in a different way than you used to do them?',
        options: [
          {value: 'Yes'},
          {value: 'No'}
        ],
        order: 12,
        domain: 'physical',
        subdomain: 'mobility'
      }),
      new RadioQuestion({
        key: 'q13',
        label: '13. How satisfied are you with your ability to ambulate or move around?',
        options: [
          {value: '0'},
          {value: '1'},
          {value: '2'},
          {value: '3'},
          {value: '4'},
          {value: '5'},
          {value: '6'},
          {value: '7'},
          {value: '8'},
          {value: '9'}
        ],
        order: 13,
        domain: 'physical',
        subdomain: 'mobility'
      }),
      new RadioQuestion({
        key: 'q14',
        label: '14. Are you able to run errands and shop without assistance?',
        options: [
          {value: 'Yes'},
          {value: 'No'}
        ],
        order: 14,
        domain: 'physical',
        subdomain: 'mobility'
      }),
      new RadioQuestion({
        key: 'q15',
        label: '15. How many times a week do you exercise moderately? ',
        description: 'Example from the American Heart Association include:' +
        'Walking briskly(3 miles per hour or faster, but not race-walking), Water aerobic, Bicycling slower than 10 miled per hour,' +
        'Tennis(doubles), Ballroom dancing, General gardening',
        options: [
          {value: '0'},
          {value: '1'},
          {value: '2'},
          {value: '3'},
          {value: '4'},
          {value: '5'},
          {value: '6'},
          {value: '7'}
        ],
        order: 15,
        domain: 'physical',
        subdomain: 'mobility'
      }),
      new RadioQuestion({
        key: 'q16',
        label: '16. How many times a week do you exercise vigorously? ',
        description: 'Example from the American Heart Association include:' +
        'Walking briskly(3 miles per hour or faster, but not race-walking), Water aerobic, Bicycling slower than 10 miled per hour,' +
        'Tennis(doubles), Ballroom dancing, General gardening',
        options: [
          {value: '0'},
          {value: '1'},
          {value: '2'},
          {value: '3'},
          {value: '4'},
          {value: '5'},
          {value: '6'},
          {value: '7'}
        ],
        order: 16,
        domain: 'physical',
        subdomain: 'mobility'
      })
    ];
    return question.sort((a, b) => a.order - b.order);
  }

  getDrugq() {
    let physicalQuestion: QuestionBase<any>[] = [
      new RadioQuestion({
        key: 'q17',
        label: '17. Do you smoke cigarettes? (If no, skip the next question)',
        options: [
          {value: 'Yes'},
          {value: 'No'}
        ],
        order: 17,
        domain: 'physical',
        subdomain: 'drug'
      }),
      new RadioQuestion({
        key: 'q18',
        label: '18. If you do smoke, how many cigarettes do you smoke in one day?',
        options: [
          {value: '0'},
          {value: '1'},
          {value: '2'},
          {value: '3'},
          {value: '4'},
          {value: '5'},
          {value: '6'},
          {value: '7'},
          {value: '8'},
          {value: '9'}
        ],
        order: 18,
        domain: 'physical',
        subdomain: 'drug'
      }),
      new RadioQuestion({
        key: 'q19',
        label: '19. Do you currently use chewing tobacco, (snuff)?',
        options: [
          {value: 'Yes'},
          {value: 'No'}
        ],
        order: 19,
        domain: 'physical',
        subdomain: 'drug'
      }),
      new RadioQuestion({
        key: 'q20',
        label: '20. How many drinks do you have in a week?',
        options: [
          {value: '0'},
          {value: '1'},
          {value: '2'},
          {value: '3'},
          {value: '4'},
          {value: '5'},
          {value: '6'},
          {value: '7'},
          {value: '8'},
        ],
        order: 20,
        domain: 'physical',
        subdomain: 'drug'
      }),
      new RadioQuestion({
        key: 'q21',
        label: '21. How many drinks do you have at one time?',
        options: [
          {value: '0'},
          {value: '1'},
          {value: '2'},
          {value: '3'},
          {value: '4'},
          {value: '5'},
          {value: '6'},
          {value: '7'},
          {value: '8'},
        ],
        order: 21,
        domain: 'physical',
        subdomain: 'drug'
      }),
      new RadioQuestion({
        key: 'q22',
        label: '22. Do you smoke marijuana? (If no, skip the next question)',
        options: [
          {value: 'Yes'},
          {value: 'No'}
        ],
        order: 22,
        domain: 'physical',
        subdomain: 'drug'
      }),
      new RadioQuestion({
        key: 'q23',
        label: '23. How many times in a week do you smoke marijuana? ',
        options: [
          {value: '0'},
          {value: '1'},
          {value: '2'},
          {value: '3'},
          {value: '4'},
          {value: '5'},
          {value: '6'},
          {value: '7'},
          {value: '8'},
        ],
        order: 23,
        domain: 'physical',
        subdomain: 'drug'
      }),
      new RadioQuestion({
        key: 'q24',
        label: '24. Do you use any other recreational drugs (including drugs prescribed for other people)?   (If no, skip the next question)?',
        options: [
          {value: 'Yes'},
          {value: 'No'}
        ],
        order: 24,
        domain: 'physical',
        subdomain: 'drug'
      }),
      new RadioQuestion({
        key: 'q25',
        label: '25. How often do you use/take the drug(s)in a week? ',
        options: [
          {value: '0'},
          {value: '1'},
          {value: '2'},
          {value: '3'},
          {value: '4'},
          {value: '5'},
          {value: '6'},
          {value: '7'},
          {value: '8'}
        ],
        order: 25,
        domain: 'physical',
        subdomain: 'drug'
      })
      //subdomain 3 food
    ];
    return physicalQuestion.sort((a, b) => a.order - b.order);
  }

  getFoodq() {
    let questions: QuestionBase<any>[] = [
      new RadioQuestion({
        key: 'q26',
        label: '26. How many meals a day do you eat?',
        options: [
          {value: '0'},
          {value: '1'},
          {value: '2'},
          {value: '3'},
          {value: '4'},
          {value: '5'},
          {value: '6'},
          {value: '7'},
          {value: '8'},
          {value: '9'},
          {value: '10'}
        ],
        order: 26,
        domain: 'physical',
        subdomain: 'food'
      }),
      new RadioQuestion({
        key: 'q28',
        label: '28. How many glasses of water do you drink per day?',
        options: [
          {value: '0'},
          {value: '1'},
          {value: '2'},
          {value: '3'},
          {value: '4'},
          {value: '5'},
          {value: '6'},
          {value: '7'},
          {value: '8'},
          {value: '9'},
          {value: '10'}
        ],
        order: 28,
        domain: 'physical',
        subdomain: 'food'
      })
    ];
    return questions.sort((a, b) => a.order - b.order);
  }

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
