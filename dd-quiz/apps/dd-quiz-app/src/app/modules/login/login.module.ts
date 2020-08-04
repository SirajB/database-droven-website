import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginScreenComponent } from './components/login-screen/login-screen.component';

@NgModule({
  declarations: [LoginScreenComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginScreenComponent,
      },
    ]),
  ],
  exports: [LoginScreenComponent],
})
export class LoginModule {}
