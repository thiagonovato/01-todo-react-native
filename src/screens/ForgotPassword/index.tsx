import React, { useContext, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import Logo from '../../assets/logo-home.png';
import { Input } from '../../components/Input';
import { ButtonGeneric } from '../../components/ButtonGeneric';
import AuthContext from '../../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';

export function ForgotPassword() {
  const navigation = useNavigation();
  const { forgotPassword, loadingAuth } = useContext(AuthContext);

  const [email, setEmail] = useState<string>();

  async function handleForgotPassword() {
    if (!email) return;
    await forgotPassword(email);
    setEmail('');
  }

  function handleBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.image} />
      <Input
        placeholder='Email'
        value={email}
        type={'email'}
        onChangeText={setEmail}
      />
      <ButtonGeneric
        title='Recover password'
        onPress={() => handleForgotPassword()}
        loading={loadingAuth}
      />
      <View style={styles.containerLink}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.buttonLink}
          onPress={handleBack}
        >
          <Text style={styles.textLink}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
