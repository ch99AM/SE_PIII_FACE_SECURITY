
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AddUser from '../screens/AddUser'
import EditUser from '../screens/EditUser'
import Queries from '../screens/Queries'

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="AddUser"
      activeColor="#f08241"
      barStyle={{ backgroundColor: '#465881' }}
    >
      <Tab.Screen
        name="AddUser"
        component={AddUser}
        options={{
          tabBarLabel: 'AddUser',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="EditUser"
        component={EditUser}
        options={{
          tabBarLabel: 'EditUser',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-settings" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Queries"
        component={Queries}
        options={{
          tabBarLabel: 'Queries',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
