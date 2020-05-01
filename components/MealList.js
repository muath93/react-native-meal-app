import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import MealItem from '../components/MealItem';

const MealList = (props) => {
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
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item) => item.id}
        renderItem={renderMealsItem}
        style={{ width: '100%' }}
      />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
