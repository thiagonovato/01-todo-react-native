import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Checkbox from 'expo-checkbox';
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';
import { COLORS } from '../../utils/colors';

export function Card() {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <Checkbox
        value={checked}
        onValueChange={setChecked}
        style={styles.checkbox}
        color={checked ? COLORS.purpleDark : COLORS.blue}
      />
      <Text style={styles.text}>
        Teste teste teste teste teste teste teste teste teste teste
      </Text>
      <TouchableOpacity activeOpacity={0.8}>
        <Feather style={styles.icon} name='trash-2' size={24} color='black' />
      </TouchableOpacity>
    </View>
  );
}
