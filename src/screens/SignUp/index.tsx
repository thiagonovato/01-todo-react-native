import React, { useContext, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import Logo from '../../assets/logo-home.png';
import { Input } from '../../components/Input';
import { ButtonGeneric } from '../../components/ButtonGeneric';
import AuthContext from '../../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';

export function SignUp() {
  const navigation = useNavigation();
  const { signUp, loadingAuth } = useContext(AuthContext);

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [hidePass, setHidePass] = useState<boolean>(true);

  async function handleSignUp() {
    if (!email || !password) return;
    await signUp(email, password);
    setEmail('');
    setPassword('');
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
      <Input
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry={hidePass}
        password
        setHidePass={() => setHidePass(!hidePass)}
      />
      <ButtonGeneric
        title='Create a new account'
        onPress={() => handleSignUp()}
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
