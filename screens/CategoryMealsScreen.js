import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const CategoryMealsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>CategoryMealsScreen</Text>
      <Button
        title='Go to Meal Details :)'
        onPress={() => {
          props.navigation.navigate('MealDetail');
        }}
      />
    </View>
  );
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
