import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ScreenConstants } from './shared/constants/screens.constants';

const routes: Routes = [
  {
    path: '',
    redirectTo: ScreenConstants.LOGIN,
    pathMatch: 'full',
  },
  {
    path: ScreenConstants.LOGIN,
    data: { state: ScreenConstants.LOGIN },
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: ScreenConstants.SELECT_QUIZ,
    data: { state: ScreenConstants.SELECT_QUIZ },
    loadChildren: () =>
      import('./modules/select-quiz/select-quiz.module').then(
        (m) => m.SelectQuizModule
      ),
  },
  {
    path: ScreenConstants.SELECT_QUESTION,
    data: { state: ScreenConstants.SELECT_QUESTION },
    loadChildren: () =>
      import('./modules/select-question/select-question.module').then(
        (m) => m.SelectQuestionModule
      ),
  },
  {
    path: ScreenConstants.VIEW_QUESTION,
    data: { state: ScreenConstants.VIEW_QUESTION },
    loadChildren: () =>
      import('./modules/view-question/view-question.module').then(
        (m) => m.ViewQuestionModule
      ),
  },
  {
    path: ScreenConstants.CREATE_QUIZ,
    data: { state: ScreenConstants.CREATE_QUIZ },
    loadChildren: () =>
      import('./modules/create-quiz/create-quiz.module').then(
        (m) => m.CreateQuizModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
