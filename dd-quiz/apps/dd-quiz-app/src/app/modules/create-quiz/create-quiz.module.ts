import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CreateQuizScreenComponent } from './components/create-quiz-screen/create-quiz-screen.component';

@NgModule({
  declarations: [CreateQuizScreenComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CreateQuizScreenComponent,
      },
    ]),
  ],
  exports: [CreateQuizScreenComponent],
})
export class CreateQuizModule {}
