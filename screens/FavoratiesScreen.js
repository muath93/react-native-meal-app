import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FavoratiesScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>FavoratiesScreen</Text>
    </View>
  );
};

export default FavoratiesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
