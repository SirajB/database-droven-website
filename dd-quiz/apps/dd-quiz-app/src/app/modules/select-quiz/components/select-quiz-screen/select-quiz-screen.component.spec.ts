import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectQuizScreenComponent } from './select-quiz-screen.component';

describe.skip('SelectQuizScreenComponent', () => {
  let component: SelectQuizScreenComponent;
  let fixture: ComponentFixture<SelectQuizScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectQuizScreenComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectQuizScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
