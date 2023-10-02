import React, { useContext } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';
import AuthContext from '../contexts/AuthContext';

export function Routes() {
  const { user } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      {user === null ? <SignIn /> : <Home />}
    </View>
  );
}
