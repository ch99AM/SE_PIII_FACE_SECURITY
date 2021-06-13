

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Queries from '../screens/Queries'
import QueryDate from '../screens/QueryDate'

const SettingsStack = createStackNavigator();

export default function EditUserStack() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen 
        name="Queries" 
        component={Queries} 
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
        name="QueryByDate" 
        component={QueryDate} 
        options={{
          title: 'Query by date',
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