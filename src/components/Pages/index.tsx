import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

export function Pages() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.topicContainer} activeOpacity={0.8}>
        <Text style={styles.topic}>Created</Text>
        <View style={styles.topicNumberBackground}>
          <Text style={styles.topicNumber}>0</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.topicContainer} activeOpacity={0.8}>
        <Text style={styles.done}>Done</Text>
        <View style={styles.topicNumberBackground}>
          <Text style={styles.topicNumber}>0</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
