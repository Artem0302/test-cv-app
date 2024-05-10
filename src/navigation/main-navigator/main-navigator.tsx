import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '@screens/home-screen';
import {InfoScreen} from '@screens/info-screen';
import * as React from 'react';
import {TMainNavigatorParamsList} from '@shared/types';

const Main = createStackNavigator<TMainNavigatorParamsList>();

export function MainNavigator() {
  return (
    <Main.Navigator initialRouteName={'MAIN.HOME_SCREEN'}>
      <Main.Screen name="MAIN.HOME_SCREEN" component={HomeScreen} />
      <Main.Screen name="MAIN.INFO_SCREEN" component={InfoScreen} />
    </Main.Navigator>
  );
}
