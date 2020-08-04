import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SelectQuizScreenComponent } from './components/select-quiz-screen/select-quiz-screen.component';

@NgModule({
  declarations: [SelectQuizScreenComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SelectQuizScreenComponent,
      },
    ]),
  ],
  exports: [SelectQuizScreenComponent],
})
export class SelectQuizModule {}
