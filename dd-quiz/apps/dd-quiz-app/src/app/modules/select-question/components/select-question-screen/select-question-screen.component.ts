import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dd-quiz-select-question-screen',
  templateUrl: './select-question-screen.component.html',
  styleUrls: ['./select-question-screen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectQuestionScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
