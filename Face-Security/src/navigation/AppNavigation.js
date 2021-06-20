

import * as React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'


import AddUserStack from './AddUserNavigation';
import EditUserStack from './EditUserNavigation';
import QueriesStack from './QueriesNavigation';

const Tab = createMaterialBottomTabNavigator();


function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="AddUser"
      backBehavior="none"
      activeColor="#f08241"
      barStyle={{ backgroundColor: '#465881' }}
      title="Face Security"
    >
      <Tab.Screen
        name="AddUser"
        component={AddUserStack}
        options={{
          tabBarLabel: 'AddUser',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="EditUser"
        component={EditUserStack}
        options={{
          tabBarLabel: 'EditUser',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-settings" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Queries"
        component={QueriesStack}
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

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>          
  );
}





