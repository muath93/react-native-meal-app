import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';
import { AdMobBanner, AdMobRewarded } from 'expo-ads-admob';

import MealsNavigator from './navigation/MealsNavigator';
import { set } from 'react-native-reanimated';

enableScreens();

const fetchFont = async () => {
  return await Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFont}
        onFinish={() => setFontLoaded(true)}
        onError={(e) => console.log(e)}
      />
    );
  }

  // const bannerError = (e) => {
  //   console.log(e);
  // };

  return (
    <>
      <MealsNavigator style={styles.container} />
      {/* <AdMobBanner
        style={styles.ads}
        bannerSize='smartBannerPortrait'
        adUnitID='ca-app-pub-3940256099942544/6300978111' // Test ID, Replace with your-admob-unit-id
        servePersonalizedAds // true or false
        onDidFailToReceiveAdWithError={(e) => bannerError(e)}
        setTestDeviceIDAsync='EMULATOR'
      /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '80%',
  },
  ads: {
    height: '8%',
    width: '100%',
  },
});
