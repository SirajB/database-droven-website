import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuizScreenComponent } from './create-quiz-screen.component';

describe('CreateQuizScreenComponent', () => {
  let component: CreateQuizScreenComponent;
  let fixture: ComponentFixture<CreateQuizScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateQuizScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQuizScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
