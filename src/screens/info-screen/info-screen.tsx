import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {TInfoScreenNavigatorType} from '@shared/types';

type TInfoScreenNavProp = TInfoScreenNavigatorType['navigation'];

export function InfoScreen() {
  const navigation = useNavigation<TInfoScreenNavProp>();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
      headerTintColor: '#00FF7F',
      headerStyle: {
        backgroundColor: '#FFF8DC',
      },
      headerTitleStyle: {
        fontSize: 24,
        fontWeight: '700',
      },
      title: 'Name',
    });
  }, [navigation]);

  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}
