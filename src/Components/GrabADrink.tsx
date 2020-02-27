import React from 'react';
import {Button, View, Text} from 'react-native';
import {styles} from '../styles';
import {Drink} from './Drink';
import {DrinkType} from '../Types/DrinkType';

const getRandomDrink = () => {
  // TODO: Get from api and parse json response
  'A drink!';
};

var myDrink: DrinkType = {
  title: 'MyDrink',
  ingredients: ['foo', 'bar'],
};

export const GrabADrink: React.FC = () => {
  var [drink] = React.useState<DrinkType | undefined>(myDrink)
  let drinkView;

  if (drink) {
    drinkView = <Drink drink={myDrink}/>;
  }

  return (
    <View style={styles.body}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Grab a drink</Text>
        <Text style={styles.sectionDescription}>
          Click here to get a random drink!
        </Text>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button title="Grab a drink!" onPress={() => getRandomDrink()} />
          </View>
        </View>
        {drinkView}
      </View>
    </View>
  );
};
