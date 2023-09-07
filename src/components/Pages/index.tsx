import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import useListStore from '../../store/list';

export function Pages() {
  const { screen, setScreen, list } = useListStore();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.topicContainer}
        activeOpacity={0.8}
        onPress={() => setScreen('created')}
      >
        <Text style={styles.topic}>Created</Text>
        <View style={styles.topicNumberBackground}>
          <Text style={styles.topicNumber}>
            {list.filter((item) => item.done === false).length}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.topicContainer}
        activeOpacity={0.8}
        onPress={() => setScreen('done')}
      >
        <Text style={styles.done}>Done</Text>
        <View style={styles.topicNumberBackground}>
          <Text style={styles.topicNumber}>
            {list.filter((item) => item.done === true).length}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
