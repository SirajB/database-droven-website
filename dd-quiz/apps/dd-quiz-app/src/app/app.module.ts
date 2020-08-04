import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginScreenComponent } from './modules/login/components/login-screen/login-screen.component';
import { NgxsModule } from '@ngxs/store';
import { FinderState } from './core/store/finder.state';
import { LayoutState } from './core/store/layout.state';

@NgModule({
  declarations: [AppComponent, LoginScreenComponent],
  imports: [BrowserModule, NgxsModule.forRoot([FinderState, LayoutState])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
