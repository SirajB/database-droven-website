import { FinderScreenNavigationConfig } from '@dd/shared/utils/screens-content.array';

export class GetAllScreens {
  static readonly type = '[Layout] Get All Screens';
  constructor(public payload: FinderScreenNavigationConfig[]) {}
}

export class SetCurrentScreen {
  static readonly type = '[Layout] Set Current Screen';
  constructor(public payload: string) {}
}
