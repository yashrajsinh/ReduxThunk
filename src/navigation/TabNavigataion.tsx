import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// Screens
import HomeScreen from '../screens/HomeScreen';
import TasksScreen from '../screens/TasksScreen';
{
  /* ===
   Handles the tab navigation for screens 
   1. Home
   2. Completed 
  ===*/
}
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Tab.Navigator
          screenOptions={() => ({
            headerShown: false,
            tabBarActiveTintColor: '#6200ee',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: { height: 60, paddingBottom: 5 },
          })}
        >
          <Tab.Screen name="Current Tasks" component={HomeScreen} />
          <Tab.Screen name="Completed" component={TasksScreen} />
        </Tab.Navigator>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
