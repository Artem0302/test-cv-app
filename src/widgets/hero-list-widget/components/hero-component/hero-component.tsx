import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {IHero, useFavoriteStore} from '@entities/heroes';
import {THomeScreenNavigatorType} from '@shared/types';
import ArrowRight from '../../assets/arrow-right.svg';
import LikeAltSvg from '../../assets/like-alt-svg.svg';
import LikeSvg from '../../assets/like-svg.svg';
import {styles} from './hero-component.styles';

type THomeScreenNavProp = THomeScreenNavigatorType['navigation'];

interface IHeroComponent {
  hero: IHero;
}

export function HeroComponent({hero}: IHeroComponent) {
  const navigation = useNavigation<THomeScreenNavProp>();
  const {addFavorite, deleteFavorite} = useFavoriteStore();
  const [liked, setLiked] = useState(false);

  const onNavigateHandler = () =>
    navigation.navigate('MAIN.INFO_SCREEN', {hero});

  const onLikeHandler = () => {
    liked ? deleteFavorite(hero) : addFavorite(hero);

    setLiked(!liked);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onNavigateHandler}>
      <TouchableOpacity
        onPress={onLikeHandler}
        hitSlop={8}
        style={styles.like_btn}>
        {liked ? (
          <LikeAltSvg width={24} height={24} fill={'#FF0000'} />
        ) : (
          <LikeSvg width={24} height={24} fill={'#FF0000'} />
        )}
      </TouchableOpacity>

      <Text style={styles.name_text}>{hero.name}</Text>

      <View style={styles.arrow_right}>
        <ArrowRight width={22} height={22} />
      </View>
    </TouchableOpacity>
  );
}
