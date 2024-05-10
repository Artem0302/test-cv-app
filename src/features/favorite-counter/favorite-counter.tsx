import React from 'react';
import {View, Text} from 'react-native';
import {useFavoriteStore} from '@entities/heroes';
import {styles} from './favorite-counter.styles';

interface IFavoriteCounter {
  text: string;
  gender: 'male' | 'n/a' | 'female';
}

export function FavoriteCounter({text, gender}: IFavoriteCounter) {
  const {favorites} = useFavoriteStore();

  const amount = favorites.reduce(
    (count, obj) => (obj.gender === gender ? count + 1 : count),
    0,
  );

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{text}</Text>
      <Text style={styles.amount}>{amount}</Text>
    </View>
  );
}
