import React, { useEffect, useState } from 'react';
import { Alert, FlatList, View } from 'react-native';

import { styles } from './styles';
import { Card, ItemProps } from '../Card';
import useListStore from '../../store/list';

export function List() {
  const { list, removeTodo, checkTodo, screen } = useListStore(
    (state) => state
  );

  function handleCheck(item) {
    checkTodo(item.id);
  }

  function handleRemove(item) {
    Alert.alert('Remove', `Confirm remove ${item.description}?`, [
      {
        text: ' Yes',
        onPress: () => removeTodo(item.id),
        style: 'cancel',
      },
      {
        text: ' No',
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={list.filter(
          (item) => item.done === (screen === 'done' ? true : false)
        )}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }) => (
          <Card
            item={item}
            onClick={() => handleCheck(item)}
            onRemove={() => handleRemove(item)}
          />
        )}
      />
    </View>
  );
}
