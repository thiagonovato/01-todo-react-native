import React, { useState } from 'react';
import { Alert, Text, TextInput, View } from 'react-native';

import { styles } from './styles';
import { Button } from '../Button';
import { COLORS } from '../../utils/colors';
import useListStore from '../../store/list';
import { ButtonGeneric } from '../ButtonGeneric';

type Iprops = {
  promptAsync: () => void;
};
export function FormLogin({ promptAsync }: Iprops) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const addTodo = useListStore((state) => state.addTodo);

  async function handleSave() {
    if (!email) {
      return;
    }
    // addTodo(email);
    setEmail('');
  }

  async function handleGoogle() {
    Alert.alert('Google', 'Hey Google');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        value={email}
        style={styles.textInput}
        placeholder='Email'
        placeholderTextColor={COLORS.gray300}
        onChangeText={setEmail}
        textContentType='emailAddress'
      />
      <TextInput
        value={password}
        style={styles.textInput}
        placeholder='Password'
        placeholderTextColor={COLORS.gray300}
        onChangeText={setPassword}
        secureTextEntry
        textContentType='password'
      />
      <ButtonGeneric title='Login' onPress={() => handleSave()} />
      <ButtonGeneric
        icon='google'
        title='Enter with Google'
        onPress={() => promptAsync()}
      />
    </View>
  );
}
