import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { COLORS } from '../../utils/colors';

type Props = {
  onCreate: () => void;
};
export function Button({ onCreate }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.9}
      onPress={onCreate}
    >
      <Feather name='plus-circle' size={24} color={COLORS.gray100} />
    </TouchableOpacity>
  );
}
