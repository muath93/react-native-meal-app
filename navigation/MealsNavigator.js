import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavortiesScreen from '../screens/FavortiesScreen';
import FiltersScreen from '../screens/FiltersScree';

import Colors from '../constant/Colors';

const defaultNavigationOptions = {
  headerTitle: 'Screen',
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
  },
  headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.primaryColor,
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: 'Meal Categories',
      },
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultNavigationOptions,
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavortiesScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultNavigationOptions,
  }
);

const tab = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name='ios-restaurant' size={28} color={tabInfo.tintColor} />
        );
      },
      activeColor: Colors.primaryColor,
      tabBarColor: Colors.accentColor,
      inactiveColor: '#ccc',
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-star' size={28} color={tabInfo.tintColor} />;
      },
      inactiveColor: '#ccc',
      tabBarColor: Colors.primaryColor,
    },
  },
};

const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(
        {
          Meals: tab.Meals,
          Favorites: tab.Favorites,
        },
        {
          activeColor: 'white',
          shifting: true,
        }
      )
    : createBottomTabNavigator(
        {
          Meals: tab.Meals,
          Favorites: tab.Favorites,
        },
        {
          tabBarOptions: {
            activeTintColor: Colors.primaryColor,
          },
        }
      );

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen,
  },
  {
    defaultNavigationOptions: defaultNavigationOptions,
  }
);

const MainNav = createDrawerNavigator({
  Meals: MealsFavTabNavigator,
  Filters: FiltersNavigator,
});

export default createAppContainer(MainNav);
