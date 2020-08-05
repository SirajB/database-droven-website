import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectQuestionScreenComponent } from './select-question-screen.component';

describe.skip('SelectQuestionScreenComponent', () => {
  let component: SelectQuestionScreenComponent;
  let fixture: ComponentFixture<SelectQuestionScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectQuestionScreenComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectQuestionScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
