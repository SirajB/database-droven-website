import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ViewQuestionScreenComponent } from './components/view-question-screen/view-question-screen.component';

@NgModule({
  declarations: [ViewQuestionScreenComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ViewQuestionScreenComponent,
      },
    ]),
  ],
  exports: [ViewQuestionScreenComponent],
})
export class ViewQuestionModule {}
