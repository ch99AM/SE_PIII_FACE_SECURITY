

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AddUser from '../screens/AddUser'

const SettingsStack = createStackNavigator();

export default function AddUserStack() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen 
        name="Add User" 
        component={AddUser} 
        options={{
          title: 'Face Security',
          headerStyle: {
            backgroundColor: '#465881',
          },
          headerTintColor: '#f08241',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
    </SettingsStack.Navigator>
  );
}