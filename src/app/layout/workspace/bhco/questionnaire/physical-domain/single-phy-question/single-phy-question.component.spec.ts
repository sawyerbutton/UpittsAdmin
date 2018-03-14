import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePhyQuestionComponent } from './single-phy-question.component';

describe('SinglePhyQuestionComponent', () => {
  let component: SinglePhyQuestionComponent;
  let fixture: ComponentFixture<SinglePhyQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePhyQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePhyQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
