import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FinderState } from './core/store/finder.state';
import { LayoutState } from './core/store/layout.state';
import { SelectQuizScreenComponent } from './modules/select-quiz/components/select-quiz-screen/select-quiz-screen.component';
import { SelectQuestionScreenComponent } from './modules/select-question/components/select-question-screen/select-question-screen.component';
import { ViewQuestionScreenComponent } from './modules/view-question/components/view-question-screen/view-question-screen.component';
import { CreateQuizScreenComponent } from './modules/create-quiz/components/create-quiz-screen/create-quiz-screen.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgxsModule.forRoot([FinderState, LayoutState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
