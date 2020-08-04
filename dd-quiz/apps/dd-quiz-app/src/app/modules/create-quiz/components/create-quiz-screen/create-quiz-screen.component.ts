import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dd-quiz-create-quiz-screen',
  templateUrl: './create-quiz-screen.component.html',
  styleUrls: ['./create-quiz-screen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateQuizScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
