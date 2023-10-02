import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Login from '../screens/Login';
import AuthContext from '../contexts/AuthContext';
import { COLORS } from '../utils/colors';

export function Routes() {
  const { promptAsync, user, logout } = useContext(AuthContext);
  return (
    <>
      {user ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            style={{ backgroundColor: COLORS.blue, padding: 16 }}
            activeOpacity={0.8}
            onPress={logout}
          >
            <Text>Deslogar</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Login promptAsync={promptAsync} />
      )}
    </>
  );
}
