import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {TInfoScreenNavigatorType} from '@shared/types';
import {styles} from './info-screen.styles';

type TInfoScreenNavProp = TInfoScreenNavigatorType['navigation'];

type TInfoScreenRouteProp = TInfoScreenNavigatorType['route'];

export function InfoScreen() {
  const navigation = useNavigation<TInfoScreenNavProp>();
  const route = useRoute<TInfoScreenRouteProp>();
  const {hero} = route.params;

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
      title: hero.name,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.block_wrapper}>
        <Text style={styles.title}>Name</Text>
        <Text style={styles.block_value}>{hero.name}</Text>
      </View>

      <View style={styles.block_wrapper}>
        <Text style={styles.title}>Height</Text>
        <Text style={styles.block_value}>{hero.height}</Text>
      </View>

      <View style={styles.block_wrapper}>
        <Text style={styles.title}>Mass</Text>
        <Text style={styles.block_value}>{hero.mass}</Text>
      </View>

      <View style={styles.block_wrapper}>
        <Text style={styles.title}>Hair color</Text>
        <Text style={styles.block_value}>{hero.hair_color}</Text>
      </View>

      <View style={styles.block_wrapper}>
        <Text style={styles.title}>Skin color</Text>
        <Text style={styles.block_value}>{hero.skin_color}</Text>
      </View>

      <View style={styles.block_wrapper}>
        <Text style={styles.title}>Eye color</Text>
        <Text style={styles.block_value}>{hero.eye_color}</Text>
      </View>

      <View style={styles.block_wrapper}>
        <Text style={styles.title}>Birth year</Text>
        <Text style={styles.block_value}>{hero.birth_year}</Text>
      </View>

      <View style={styles.block_wrapper}>
        <Text style={styles.title}>Gender</Text>
        <Text style={styles.block_value}>{hero.gender}</Text>
      </View>
    </View>
  );
}
