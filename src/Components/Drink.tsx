import React from 'react';
import {FlatList, View, Text} from 'react-native';
import {styles} from '../styles';
import {DrinkType} from '../Types/DrinkType';

interface DrinkProps {
  drink: DrinkType;
}

interface ListItemProps {
  item: string;
}

interface ListProps {
  title: string;
  listItems?: string[];
}

const ListItemView = ({item}: ListItemProps) => {
  return <Text>- {item}</Text>;
};

const ListView = ({title, listItems}: ListProps) => {
  if (listItems) {
    return (
      <View style={styles.body}>
        <Text>{title}</Text>
        <FlatList
          data={listItems}
          renderItem={({item}: ListItemProps) => <ListItemView item={item} />}
          keyExtractor={item => item}
        />
      </View>
    );
  } else {
    // TODO: how to not return?
    return <Text />;
  }
};

// TODO: map ingredients and directions into lists
export const Drink: React.FC<DrinkProps> = ({drink}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{drink.title}</Text>
      <ListView title="ingredients" listItems={drink.ingredients} />
      <ListView title="directions" listItems={drink.directions} />
    </View>
  );
};
