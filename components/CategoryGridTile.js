import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Image,
} from 'react-native';

import Colors from '../constant/Colors';

const CategoryGridTile = (props) => {
  let TouchableComponent = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.gridItem}>
      <TouchableComponent style={{ flex: 1 }} onPress={props.onSelect}>
        <View style={styles.container}>
          <ImageBackground
            source={{
              uri: props.bgImage,
            }}
            style={styles.bgImage}
          >
            <View style={styles.titleContainer}>
              <Text style={styles.title} numberOfLines={2}>
                {props.title}
              </Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableComponent>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 8,
    height: 180,
    borderRadius: 10,
    elevation: 5,
    overflow: 'hidden',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    // padding: 15,
    // borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    // overflow: 'hidden',
  },
  titleContainer: {
    backgroundColor: 'rgba(134, 29, 29, 0.7)',
    paddingVertical: 3,
    paddingHorizontal: 12,
    height: '20%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    textAlign: 'right',
    color: '#eee',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
});
