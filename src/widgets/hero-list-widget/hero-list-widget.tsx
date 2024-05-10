import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {IHero, useHeroesStore} from '@entities/heroes';
import {HeroComponent} from './components';
import {styles} from './hero-list-widget.styles';

export function HeroListWidget() {
  const {heroes} = useHeroesStore();

  const renderItem = ({item}: {item: IHero}) => <HeroComponent hero={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Heroes</Text>
      <FlatList data={heroes} renderItem={renderItem} />
    </View>
  );
}
