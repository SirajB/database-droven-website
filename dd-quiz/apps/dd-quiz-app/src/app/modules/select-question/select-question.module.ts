import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SelectQuestionScreenComponent } from './components/select-question-screen/select-question-screen.component';

@NgModule({
  declarations: [SelectQuestionScreenComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SelectQuestionScreenComponent,
      },
    ]),
  ],
  exports: [SelectQuestionScreenComponent],
})
export class SelectQuestionModule {}
