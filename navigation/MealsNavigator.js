import React, { useState } from 'react';
import { Platform, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import CustomHeaderButton from '../components/CustomHeaderButton';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavortiesScreen from '../screens/FavortiesScreen';
import FiltersScreen from '../screens/FiltersScree';

import Colors from '../constant/Colors';

const screenWidth = Math.round(Dimensions.get('window').width);

const defaultNavigationOptions = {
  headerTitle: 'Screen',
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
  },
  headerTitleStyle: {
    width: screenWidth - 150,
    textAlign: 'center',
    fontFamily: 'open-sans-bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans',
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

const MainNav = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: 'Meals',
        drawerIcon: () => (
          <Ionicons
            name='md-restaurant'
            size={25}
            color={Colors.primaryColor}
          />
        ),
      },
    },
    Filters: {
      screen: FiltersNavigator,
      navigationOptions: {
        drawerLabel: 'Filters',
        drawerIcon: () => (
          <Ionicons name='ios-funnel' size={25} color={Colors.primaryColor} />
        ),
      },
    },
  },

  {
    contentOptions: {
      activeTintColor: Colors.primaryColor,
      inactiveTintColor: '#777',
      labelStyle: {
        fontFamily: 'open-sans-bold',
      },
      // itemStyle: {
      //   marginTop: 40,
      // },
    },
  }
);

export default createAppContainer(MainNav);
