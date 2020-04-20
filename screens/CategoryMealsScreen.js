import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import MealItem from '../components/MealItem';
import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam('categoryId');
  const meals = MEALS.filter((meal) => meal.categoryIds.includes(catId));

  const renderMealsItem = (itemData) => {
    return (
      <MealItem
        item={itemData.item}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: 'MealDetail',
            params: {
              mealId: itemData.item.id,
            },
          });
        }}
      />
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealsItem}
        style={{ width: '100%' }}
      />
    </View>
  );
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
