import React from 'react';
import { FlatList, Text, View } from 'react-native';

import { styles } from './styles';
import { Card, ItemProps } from '../Card';

export function List() {
  const data = [
    {
      id: '1',
      done: false,
      description: 'Description 1',
    },
  ];

  function handleCheck(test) {
    console.log('Check', test);
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item: any) => item}
        renderItem={({ item }) => (
          <Card item={item} onClick={() => handleCheck(item)} />
        )}
      />
    </View>
  );
}
