import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';

import { FinderState } from '@dd/core/store/finder.state';

import { AddScreen } from '@dd/core/store/actions/add-screen.action';

@Injectable({
  providedIn: 'root',
})
export class FinderFacade {
  @Select(FinderState.getScreen)
  screen$: Observable<string>;

  constructor(private _store: Store) {}

  addScreen(screen: string) {
    this._store.dispatch([new AddScreen(screen)]);
  }
}
