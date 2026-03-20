import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// Screens
import HomeScreen from '../screens/HomeScreen';
import TasksScreen from '../screens/TasksScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Tasks') {
                iconName = focused ? 'list' : 'list-outline';
              }
            },
            tabBarActiveTintColor: '#6200ee',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: { height: 60, paddingBottom: 5 },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Tasks" component={TasksScreen} />
        </Tab.Navigator>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
