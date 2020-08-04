import { ScreenConstants } from '../constants/screens.constants';

export interface FinderScreenNavigationConfig {
  name: string;
}

export const SCREENS: FinderScreenNavigationConfig[] = [
  {
    name: ScreenConstants.LOGIN,
  },
  {
    name: ScreenConstants.SELECT_QUIZ,
  },
  {
    name: ScreenConstants.SELECT_QUESTION,
  },
  {
    name: ScreenConstants.VIEW_QUESTION,
  },
  {
    name: ScreenConstants.CREATE_QUIZ,
  },
];
