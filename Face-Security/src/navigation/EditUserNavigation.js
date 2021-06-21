

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import EditUser from '../screens/EditUser'
import EditInfoUser from "../screens/EditInfoUser"

const SettingsStack = createStackNavigator();

export default function EditUserStack() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen 
        name="EditUser" 
        component={EditUser} 
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
      <SettingsStack.Screen 
        name="EditInfoUser" 
        component={EditInfoUser} 
        options={{
          title: 'Edit User Information',
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