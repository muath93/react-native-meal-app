import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FavortiesScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>FavoratiesScreen</Text>
    </View>
  );
};

export default FavortiesScreen;

FavortiesScreen.navigationOptions = {
  headerTitle: 'Your Favorties',
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
