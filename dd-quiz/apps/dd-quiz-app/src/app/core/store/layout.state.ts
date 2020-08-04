import { State, Action, StateContext, Selector } from '@ngxs/store';
import { FinderScreenNavigationConfig } from '@dd/shared/utils/screens-content.array';
import { GetAllScreens, SetCurrentScreen } from './actions/layout.action';

export interface LayoutStateModel {
  current: FinderScreenNavigationConfig;
  screens: FinderScreenNavigationConfig[];
}

@State<LayoutStateModel>({
  name: 'layout',
  defaults: {
    current: null,
    screens: [],
  },
})
export class LayoutState {
  @Selector()
  static currentLayout(state: LayoutStateModel) {
    return state.current;
  }
  constructor() {}

  @Action(GetAllScreens)
  getAllScreens(
    { getState, setState }: StateContext<LayoutStateModel>,
    { payload }: GetAllScreens
  ) {
    const state = getState();
    setState({
      ...state,
      screens: payload,
    });
  }

  @Action(SetCurrentScreen)
  setCurrentScreen(
    { getState, setState }: StateContext<LayoutStateModel>,
    { payload }: SetCurrentScreen
  ) {
    const state = getState();
    const current = state.screens.find((screen) => payload === screen.name);
    setState({
      ...state,
      current,
    });
  }
}
