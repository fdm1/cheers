import React from 'react';
import {Button, View, Text} from 'react-native';
import {styles} from '@app/styles';
import {Drink} from '@app/Components/Drink';
import {DrinkType} from '@app/Types/DrinkTypes';
import {getRandomDrink} from '@app/Apis/CocktailDb';

export const GrabADrink: React.FC = () => {
  var [drink, setDrink] = React.useState<DrinkType | undefined>(undefined);
  let drinkView;

  if (drink) {
    drinkView = <Drink drink={drink} />;
  }

  const getNewDrink = async () => {
    const response = await getRandomDrink();
    if (response) {
      setDrink(response);
    }
  };

  return (
    <View style={styles.body}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Grab a drink</Text>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button title="Random drink" onPress={getNewDrink} />
          </View>
        </View>
        {drinkView}
      </View>
    </View>
  );
};
