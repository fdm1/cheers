import React from 'react';
import {FlatList, View, Text, Image} from 'react-native';
import {styles} from '@app/styles';
import {DrinkType, IngredientType} from '@app/Types/DrinkTypes';

interface DrinkComponentProps {
  drink: DrinkType;
}

interface IngredientListViewComponentProps {
  ingredients: IngredientType[];
}

interface TextAreaComponentProps {
  sectionTitle: string;
  sectionText?: string;
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
      <Text style={styles.sectionDescription}>Ingredients</Text>
      <FlatList
        data={ingredients}
        renderItem={ingredient => formatIngredient(ingredient.item)}
        keyExtractor={ingredient => ingredient.key}
      />
    </View>
  );
};

const TextAreaView: React.FC<TextAreaComponentProps> = ({
  sectionTitle,
  sectionText,
}) => {
  if (sectionText) {
    return (
      <View style={styles.body}>
        <Text style={styles.sectionDescription}>{sectionTitle}</Text>
        <Text>{sectionText}</Text>
      </View>
    );
  } else {
    return <View />;
  }
};

export const Drink: React.FC<DrinkComponentProps> = ({drink}) => {
  return (
    <View style={styles.sectionContainer}>
      {drink && drink.image_url ? (
        <Image style={styles.drinkThumb} source={{uri: drink.image_url}} />
      ) : null}
      <Text style={styles.sectionTitle}>{drink.name}</Text>
      <IngredientListView ingredients={drink.ingredients} />
      <TextAreaView sectionTitle="Directions" sectionText={drink.directions} />
      <TextAreaView sectionTitle="Glass" sectionText={drink.glass} />
    </View>
  );
};
