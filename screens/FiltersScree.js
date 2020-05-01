import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/CustomHeaderButton';

const FiltersScree = () => {
  return (
    <View style={styles.screen}>
      <Text>FiltersScree</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});
