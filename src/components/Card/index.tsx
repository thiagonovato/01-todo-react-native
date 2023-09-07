import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { COLORS } from '../../utils/colors';

export type ItemProps = {
  id: string;
  done: boolean;
  description: string;
};
type Props = {
  item: ItemProps;
  onClick: () => void;
  onRemove: () => void;
};
export function Card({ item, onClick, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <Checkbox
        value={item.done}
        onValueChange={onClick}
        style={styles.checkbox}
        color={item.done ? COLORS.purpleDark : COLORS.blue}
      />
      <Text style={item.done ? styles.textDone : styles.text}>
        {item.description}
      </Text>
      <TouchableOpacity activeOpacity={0.8} onPress={onRemove}>
        <Feather style={styles.icon} name='trash-2' size={24} color='black' />
      </TouchableOpacity>
    </View>
  );
}
