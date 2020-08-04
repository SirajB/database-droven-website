import { Component, OnDestroy, ViewChild } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { Store } from '@ngxs/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  GetAllScreens,
  SetCurrentScreen,
} from './core/store/actions/layout.action';
import { SCREENS } from './shared/utils/screens-content.array';

@Component({
  selector: 'dd-quiz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  title = 'dd-quiz';
  isNavShown = true;

  private _destroy$ = new Subject();

  constructor(private _router: Router, private _store: Store) {
    this._store.dispatch(new GetAllScreens(SCREENS));
    this.routeListener();
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData['state']
    );
  }

  private routeListener() {
    this._router.events.pipe(takeUntil(this._destroy$)).subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this._store.dispatch(new SetCurrentScreen(e.url.slice(1)));
      }
    });
  }
}
