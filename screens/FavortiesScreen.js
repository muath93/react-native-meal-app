import React from 'react';
import { DrawerActions } from 'react-navigation-drawer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/CustomHeaderButton';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';

const favMeals = MEALS.filter((meal) => meal.id === 'm1' || meal.id === 'm2');

const FavortiesScreen = (props) => {
  return <MealList listData={favMeals} navigation={props.navigation} />;
};

export default FavortiesScreen;

FavortiesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='Menu'
          iconName={'md-menu'}
          iconSize={30}
          onPress={() => {
            navData.navigation.dispatch(DrawerActions.openDrawer());
          }}
        />
      </HeaderButtons>
    ),
  };
};
