import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import MealList from '../components/MealList';
import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam('categoryId');
  const meals = MEALS.filter((meal) => meal.categoryIds.includes(catId));

  return <MealList listData={meals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = (navData) => {
  // console.log(navData);
  const catId = navData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMealsScreen;
