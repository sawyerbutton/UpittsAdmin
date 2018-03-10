import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoQuestionsComponent } from './demo-questions.component';

describe('DemoQuestionsComponent', () => {
  let component: DemoQuestionsComponent;
  let fixture: ComponentFixture<DemoQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
