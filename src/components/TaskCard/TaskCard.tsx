import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TaskCard({ item, index }: any) {
  const getColor = () => {
    switch (item.priority) {
      case 'High':
        return '#ff4d4d';
      case 'Medium':
        return '#ffa500';
      case 'Low':
        return '#4caf50';
      default:
        return '#ccc';
    }
  };

  return (
    <View style={[styles.container, { borderLeftColor: getColor() }]}>
      <Text style={styles.index}>{index + 1}.</Text>

      <View>
        <Text style={styles.text}>{item.newText}</Text>
        <Text style={[styles.priority, { color: getColor() }]}>
          {item.priority}
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    marginVertical: 15,
    marginHorizontal: 15,
    borderLeftWidth: 6,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  index: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  text: {
    fontSize: 16,
  },
  priority: {
    fontSize: 12,
  },
});
