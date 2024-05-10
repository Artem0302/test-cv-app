import {StackScreenProps} from '@react-navigation/stack';
import {IHero} from '@entities/heroes';

export type TMainNavigatorParamsList = {
  'MAIN.HOME_SCREEN': undefined;
  'MAIN.INFO_SCREEN': {hero: IHero};
};

export type THomeScreenNavigatorType = StackScreenProps<
  TMainNavigatorParamsList,
  'MAIN.HOME_SCREEN'
>;

export type TInfoScreenNavigatorType = StackScreenProps<
  TMainNavigatorParamsList,
  'MAIN.INFO_SCREEN'
>;
