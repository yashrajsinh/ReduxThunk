import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function TaskCard({
  item,
  index,
  onToggle,
  showCheckbox = true,
}: any) {
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
    <View
      style={[
        styles.container,
        item.completed && styles.completedContainer,
        { borderLeftColor: getColor() },
      ]}
    >
      <Text style={styles.index}>{index + 1}.</Text>
      {/* CHEKCBOX */}
      {/* Show only if needed */}
      {showCheckbox && (
        <Pressable
          onPress={() => onToggle(item.id)}
          style={[styles.checkbox, item.completed && styles.checkboxChecked]}
        >
          {item.completed && <Text style={styles.checkmark}>✓</Text>}
        </Pressable>
      )}
      <View>
        <Text style={styles.text}>{item.newText}</Text>
        <Text style={[styles.priority, { color: getColor() }]}>
          {item.priority}
        </Text>
      </View>
      {/*  Checkbox */}
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
  completedContainer: {
    backgroundColor: '#e8f5e9',
    borderLeftWidth: 6,
    opacity: 0.6,
    borderLeftColor: '#2e7d32',
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
  //check box
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#aaa',
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkboxChecked: {
    backgroundColor: '#4caf50',
    borderColor: '#4caf50',
  },

  checkmark: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },

  completedText: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
});
