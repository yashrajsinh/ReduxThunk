import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import FloatingButton from '../components/FloatingButton/FloatingButton';
import InputModel from '../components/InputModel/InputModel';
{
  /* ===
  HomeScreen responsilbe for showing flatlist and button
  === */
}
export default function HomeScreen() {
  const handleAddPress = () => {
    console.log('Add button pressed!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <FloatingButton onPress={handleAddPress} />
      <InputModel />
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
