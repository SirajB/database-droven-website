import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dd-quiz-view-question-screen',
  templateUrl: './view-question-screen.component.html',
  styleUrls: ['./view-question-screen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewQuestionScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
