import React from 'react';
import {Button, View, Text} from 'react-native';
import {styles} from '../styles';
import {Drink} from './Drink';
import {DrinkType} from '../Types/DrinkTypes';
import {getRandomDrink} from '../Apis/CocktailDb';

var myDrink: DrinkType = {
  title: 'MyDrink',
  ingredients: [
    {name: 'foo', amount: '1 tsp'},
    {name: 'bar', amount: '1/2 tsp'},
  ],
  directions: 'do some stuff',
};

export const GrabADrink: React.FC = () => {
  var [drink, setDrink] = React.useState<DrinkType | undefined>(myDrink);
  let drinkView;

  if (drink) {
    drinkView = <Drink drink={drink} />;
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
            <Button
              title="Grab a drink!"
              onPress={() => {
                var response = getRandomDrink();
                console.log(response);
              }}
            />
          </View>
        </View>
        {drinkView}
      </View>
    </View>
  );
};
