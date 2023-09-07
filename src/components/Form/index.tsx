import React, { useState } from 'react';
import { Alert, TextInput, View } from 'react-native';

import { styles } from './styles';
import { Button } from '../Button';
import { COLORS } from '../../utils/colors';
import useListStore from '../../store/list';

export function Form() {
  const [description, setDescription] = useState<string>('');
  const addTodo = useListStore((state) => state.addTodo);

  async function handleSave() {
    if (!description) {
      return;
    }
    addTodo(description);
    setDescription('');
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          value={description}
          style={styles.textInput}
          placeholder='Add a new task'
          placeholderTextColor={COLORS.gray300}
          onChangeText={setDescription}
        />
        <Button onCreate={() => handleSave()} />
      </View>
    </View>
  );
}
