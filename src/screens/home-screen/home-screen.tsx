import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {FavoriteCounter} from '@features/favorite-counter';
import {useFavoriteStore} from '@entities/heroes';
import {THomeScreenNavigatorType} from '@shared/types';
import {styles} from './home-screen.styles';

type THomeScreenNavProp = THomeScreenNavigatorType['navigation'];

export function HomeScreen() {
  const navigation = useNavigation<THomeScreenNavProp>();
  const {resetFavorites} = useFavoriteStore();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
      headerTintColor: '#00FA9A',
      headerStyle: {
        backgroundColor: '#FFF8DC',
      },
      headerTitleStyle: {
        fontSize: 24,
        fontWeight: '700',
      },
      title: 'Fans',
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.gender_wrapper}>
        <FavoriteCounter text={'Male'} gender={'male'} />
        <FavoriteCounter text={'Female'} gender={'female'} />
        <FavoriteCounter text={'Others'} gender={'n/a'} />
      </View>

      <TouchableOpacity onPress={resetFavorites} style={styles.reset_btn}>
        <Text style={styles.reset_btn_text}>Clear Fans</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
