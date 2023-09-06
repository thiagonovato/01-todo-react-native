import React from 'react';
import { FlatList, Text, View } from 'react-native';

import { styles } from './styles';
import { Card } from '../Card';

export function List() {
  const data = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        extraData={(item) => item}
        renderItem={() => <Card />}
      />
    </View>
  );
}
