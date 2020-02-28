/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {GrabADrink} from 'Components/GrabADrink';
import {Footer} from './Components/Footer';
import {styles} from './styles';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeAreaView}>
        <GrabADrink />
      </SafeAreaView>
      <Footer />
    </>
  );
};

export default App;
