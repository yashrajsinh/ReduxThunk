// FloatingButton.js
import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
{
  /* === 
  Floating button responsible to show on Current tasks screen 
  takes one prop
  1. onPress (to handle the click)
  === */
}
export default function FloatingButton({ onPress }: any) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.plus}>+</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 25, // distance from bottom
    right: 25, // distance from right
    backgroundColor: '#6200ee',
    width: 60,
    height: 60,
    borderRadius: 30, // circular
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 10, // Android shadow
  },
  plus: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    lineHeight: 32,
  },
});
