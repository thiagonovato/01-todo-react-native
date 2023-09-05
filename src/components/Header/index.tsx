import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

import Logo from '../../assets/logo-home.png';
export function Header() {
  return (
    <View style={styles.container}>
      <Image source={Logo} />
    </View>
  );
}
