import React, { useState, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Switch,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/CustomHeaderButton';
import Colors from '../constant/Colors';

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.filterLabels}>{props.label}</Text>
      <Switch
        style={
          Platform.OS === 'android'
            ? { transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }] }
            : ''
        }
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
        value={props.value}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FiltersScree = (props) => {
  const { navigation } = props;

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      isVegetarian: isVegetarian,
    };

    console.log(appliedFilters);
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  let TouchableComponent = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label='Gluten-free'
        value={isGlutenFree}
        onChange={(newValue) => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label='Lactose-free'
        value={isLactoseFree}
        onChange={(newValue) => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label='Vegan'
        value={isVegan}
        onChange={(newValue) => setIsVegan(newValue)}
      />
      <FilterSwitch
        label='Vegetarian'
        value={isVegetarian}
        onChange={(newValue) => setIsVegetarian(newValue)}
      />
      <TouchableComponent onPress={saveFilters}>
        <View style={styles.btnContainer}>
          <Text style={styles.btnSave}>Save</Text>
        </View>
      </TouchableComponent>
    </View>
  );
};

export default FiltersScree;

FiltersScree.navigationOptions = (navData) => {
  return {
    headerTitle: 'Filters',
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15,
  },
  filterLabels: {
    fontSize: 18,
  },
  btnContainer: {
    marginTop: 40,
    width: 100,
    alignItems: 'center',
    borderRadius: 15,
    padding: 10,
    color: Colors.primaryColor,
    borderColor: Colors.primaryColor,
    borderWidth: 2,
    overflow: 'hidden',
  },
  btnSave: {
    color: Colors.primaryColor,
    fontSize: 15,
    textTransform: 'uppercase',
    fontFamily: 'open-sans-bold',
  },
});
