import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { styles } from './styles';
import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';
import AuthContext from '../contexts/AuthContext';
import { PublicStack } from './PublicStack';

export function Routes() {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <View style={styles.container}>
        {user === null ? <PublicStack /> : <Home />}
      </View>
    </NavigationContainer>
  );
}
