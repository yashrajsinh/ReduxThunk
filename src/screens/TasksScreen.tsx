import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function TasksScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Tasks to complete </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1, // Important: makes the parent fill the screen
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: { fontSize: 24, fontWeight: 'bold' },
});
