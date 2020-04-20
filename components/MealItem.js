import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

const MealItem = (props) => {
  let TouchableComponent = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }

  const { title, duration, complexity, affordability, imageUrl } = props.item;
  return (
    <View style={styles.mealItem}>
      <TouchableComponent onPress={props.onSelectMeal}>
        <View>
          <View
            style={{
              ...styles.mealRow,
              ...styles.mealHeader,
            }}
          >
            <ImageBackground
              source={{
                uri: imageUrl,
              }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View
            style={{
              ...styles.mealRow,
              ...styles.mealDetails,
            }}
          >
            <Text style={styles.details}> {duration}m </Text>
            <Text style={styles.details}> {complexity} </Text>
            <Text style={styles.details}> {affordability.toUpperCase()} </Text>
          </View>
        </View>
      </TouchableComponent>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#ccc',

    marginVertical: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 17,
    color: 'white',

    // textAlign: 'center',
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '85%',
  },
  mealDetails: {
    height: '15%',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(134, 29, 29, 0.8)',
  },
  details: {
    fontFamily: 'open-sans',
    fontSize: 11,
    color: '#eee',
  },
});
