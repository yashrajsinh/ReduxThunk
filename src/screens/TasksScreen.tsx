import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
{
  /* ===
  TasksScreen responsilbe for showing completed tasks
  === */
}
//show complted tasks
import TaskView from '../components/TaskView/TaskView';

export default function TasksScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 20, margin: 15 }}>Completed Tasks</Text>
      <TaskView type="completed" />
    </View>
  );
}
