import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dd-quiz-select-quiz-screen',
  templateUrl: './select-quiz-screen.component.html',
  styleUrls: ['./select-quiz-screen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectQuizScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
