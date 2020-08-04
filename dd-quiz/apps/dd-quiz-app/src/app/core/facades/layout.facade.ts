import { LayoutState } from './../store/layout.state';
import { Injectable } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FinderScreenNavigationConfig } from '@dd/shared/utils/screens-content.array';

@Injectable({
  providedIn: 'root',
})
export class LayoutFacade {
  @Select(LayoutState.currentLayout)
  currentLayout$: Observable<FinderScreenNavigationConfig>;
}
