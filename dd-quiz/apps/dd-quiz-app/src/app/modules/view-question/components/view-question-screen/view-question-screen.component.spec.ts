import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQuestionScreenComponent } from './view-question-screen.component';

describe.skip('ViewQuestionScreenComponent', () => {
  let component: ViewQuestionScreenComponent;
  let fixture: ComponentFixture<ViewQuestionScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewQuestionScreenComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewQuestionScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
