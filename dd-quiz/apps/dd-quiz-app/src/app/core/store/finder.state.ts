import { State, Action, StateContext, Selector } from '@ngxs/store';
import { FinderStateModel } from './model/finder.state.model';

import { AddScreen } from './actions/add-screen.action';

@State<FinderStateModel>({
  name: 'finder',
  defaults: {
    screen: '',
  },
})
export class FinderState {
  @Selector()
  static getScreen(state: FinderStateModel) {
    return state.screen;
  }

  @Action(AddScreen)
  addScreen(
    { patchState }: StateContext<FinderStateModel>,
    { payload }: AddScreen
  ) {
    patchState({
      screen: payload,
    });
  }
}
