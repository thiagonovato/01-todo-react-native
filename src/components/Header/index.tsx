import React, { useContext } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

import Logo from '../../assets/logo-home.png';
import { COLORS } from '../../utils/colors';
import AuthContext from '../../contexts/AuthContext';
export function Header() {
  const { signOutService } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={Logo} />
      </View>
      <TouchableOpacity activeOpacity={0.8}>
        <MaterialCommunityIcons
          name='logout'
          size={24}
          color={COLORS.gray300}
          onPress={signOutService}
        />
      </TouchableOpacity>
    </View>
  );
}
