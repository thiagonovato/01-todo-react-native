import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';
import { COLORS } from '../../utils/colors';

type Props = {
  onPress: () => void;
  title: string;
  icon?: any;
};
export function ButtonGeneric({ onPress, title, icon }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.9}
      onPress={onPress}
    >
      {icon && (
        <AntDesign
          style={styles.icon}
          name={icon}
          size={24}
          color={COLORS.gray100}
        />
      )}
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
