import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { Header } from '../../components/Header';
import { FormLogin } from '../../components/FormLogin';

export default function Login({ promptAsync }) {
  return (
    <View style={styles.container}>
      <Header />
      <FormLogin promptAsync={() => promptAsync()} />
    </View>
  );
}
