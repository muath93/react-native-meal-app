import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Octicons, MaterialIcons } from '@expo/vector-icons';

import DefaultText from '../components/DefaultText';
import CustomHeaderButton from '../components/CustomHeaderButton';
import { MEALS } from '../data/dummy-data';
import Colors from '../constant/Colors';

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Octicons
        name={props.iconName}
        size={20}
        style={{ marginRight: 10 }}
        color={Colors.primaryColor}
      />
      <DefaultText style={styles.listText}>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam('mealId');
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const {
    title,
    duration,
    complexity,
    affordability,
    imageUrl,
    ingredients,
    steps,
  } = selectedMeal;

  return (
    <ScrollView>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <View style={styles.details}>
          <MaterialIcons
            name='timer'
            size={22}
            style={styles.icons}
            color={Colors.primaryColor}
          />
          <DefaultText>{duration}m</DefaultText>
        </View>
        <View style={styles.details}>
          <MaterialIcons
            name='info-outline'
            size={22}
            style={styles.icons}
            color={Colors.primaryColor}
          />
          <DefaultText>{complexity.toUpperCase()}</DefaultText>
        </View>
        <View style={styles.details}>
          <MaterialIcons
            name='attach-money'
            size={22}
            style={styles.icons}
            color={Colors.primaryColor}
          />
          <DefaultText>{affordability.toUpperCase()}</DefaultText>
        </View>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {ingredients.map((ingredient) => (
        <ListItem iconName={'dash'} key={ingredient}>
          {ingredient}
        </ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {steps.map((step) => (
        <ListItem iconName={'primitive-dot'} key={step}>
          {step}
        </ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = (navData) => {
  const mealId = navData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='Favorate'
          iconName={'ios-star-outline'}
          iconSize={23}
          onPress={() => {
            console.log('Mark as favorate');
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  detailsContainer: {
    flexDirection: 'row',
    // paddingHorizontal: 10,
    // paddingVertical: 20,
    padding: 15,
    justifyContent: 'space-around',
  },
  details: {
    flexDirection: 'row',
  },
  icons: {
    marginRight: 5,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 10,
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 12,
    flexDirection: 'row',
  },
  listText: {
    paddingRight: 15,
  },
  // simple: {
  //   color: 'green',
  // },
  // hard: {
  //   color: 'red',
  // },
  // challenging: {
  //   color: 'orange',
  // },
});
