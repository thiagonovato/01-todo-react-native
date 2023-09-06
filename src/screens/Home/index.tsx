import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './styles';
import { Header } from '../../components/Header';
import { Form } from '../../components/Form';
import { Pages } from '../../components/Pages';
import { List } from '../../components/List';

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Form />
      <Pages />
      <List />
    </View>
  );
}
