import React from 'react';
import {FlatList, View, Text} from 'react-native';
import {styles} from '../styles';
import {DrinkType, IngredientType} from '../Types/DrinkTypes';

interface DrinkComponentProps {
  drink: DrinkType;
}

interface IngredientListViewComponentProps {
  ingredients: IngredientType[];
}

const formatIngredient = (ingredient: IngredientType) => {
  return (
    <Text>
      - {ingredient.amount} {ingredient.name}
    </Text>
  );
};

const IngredientListView: React.FC<IngredientListViewComponentProps> = ({
  ingredients,
}) => {
  return (
    <View style={styles.body}>
      <Text>Ingredients</Text>
      <FlatList
        data={ingredients}
        renderItem={ingredient => formatIngredient(ingredient.item)}
        keyExtractor={ingredient => ingredient.name}
      />
    </View>
  );
};

export const Drink: React.FC<DrinkComponentProps> = ({drink}) => {
  var directions = drink.directions ? (
    <Text>Directions: {drink.directions}</Text>
  ) : null;

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{drink.name}</Text>
      <IngredientListView ingredients={drink.ingredients} />
      {directions}
    </View>
  );
};