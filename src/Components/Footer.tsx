import React from 'react';
import {View, Text, Linking} from 'react-native';
import {styles} from '@app/styles';

export const Footer: React.FC = () => {
  return (
    <View style={styles.footer}>
      <Text>
        Data sourced from:{' '}
        <Text onPress={() => Linking.openURL('https://www.thecocktaildb.com')}>
          TheCocktailDb
        </Text>
      </Text>
    </View>
  );
};