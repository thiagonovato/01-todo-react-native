import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';

export function Routes() {
  const user = null;
  console.log('user', user);
  return <View style={styles.container}>{user ? <Home /> : <SignIn />}</View>;
}
