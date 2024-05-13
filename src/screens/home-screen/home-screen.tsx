import {useNavigation} from '@react-navigation/native';
import to from 'await-to-js';
import React, {useEffect, useState} from 'react';
import {Alert, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {HeroListWidget} from '@widgets/hero-list-widget';
import {FavoriteCounter} from '@features/favorite-counter';
import {useFavoriteStore, useHeroesStore} from '@entities/heroes';
import {getHeroesRequest} from '@shared/api';
import {THomeScreenNavigatorType} from '@shared/types';
import ArrowLeft from './assets/arrow-left.svg';
import ArrowRight from './assets/arrow-right.svg';
import {styles} from './home-screen.styles';

type THomeScreenNavProp = THomeScreenNavigatorType['navigation'];

interface IPageLinks {
  next: string;
  previous: string;
}

export function HomeScreen() {
  const navigation = useNavigation<THomeScreenNavProp>();
  const {setHeroes} = useHeroesStore();
  const {resetFavorites} = useFavoriteStore();

  const [currentPage, setCurrentPage] = useState(1);

  const [pageLinks, setPageLinks] = useState<IPageLinks>({
    next: '',
    previous: '',
  });

  const errorHandler = () => {
    //At real project we should to use Toast provider there
    Alert.alert(
      'Oooops...Failed to get Star Wars heroes. You can try later or get contact with developers',
    );
  };

  const getHeroes = async (page: number) => {
    try {
      const [error, response] = await to(getHeroesRequest({page}));
      //At real project we should to use Skeleton and React Query

      if (error && !response) {
        errorHandler();
      }

      if (response) {
        setPageLinks({
          next: response?.next || '',
          previous: response?.previous || '',
        });

        setHeroes(response.results);
      }
    } catch (e) {
      errorHandler();
    }
  };

  const turnPage = (page: number) => {
    setCurrentPage(page);

    getHeroes(page);
  };

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

  useEffect(() => {
    getHeroes(currentPage);
  }, []);

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

      <HeroListWidget />

      <View style={styles.page_wrapper}>
        {pageLinks.previous && (
          <TouchableOpacity
            hitSlop={14}
            onPress={() => turnPage(currentPage - 1)}>
            <ArrowLeft width={22} height={22} />
          </TouchableOpacity>
        )}

        <Text style={styles.page_text}>Page {currentPage}</Text>

        {pageLinks.next && (
          <TouchableOpacity
            hitSlop={14}
            onPress={() => turnPage(currentPage + 1)}>
            <ArrowRight width={22} height={22} />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}
