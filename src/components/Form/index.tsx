import React from 'react';
import { TextInput, View } from 'react-native';

import { styles } from './styles';
import { Button } from '../Button';
import { COLORS } from '../../utils/colors';

export function Form() {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.textInput}
          placeholder='Add a new task'
          placeholderTextColor={COLORS.gray300}
        />
        <Button />
      </View>
    </View>
  );
}
