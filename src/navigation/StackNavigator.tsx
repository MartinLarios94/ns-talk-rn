import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import EmployeesScreen from '../screens/EmployeesScreen';
import {NSProps} from '../typos/types/fakeType';

const Stack = createStackNavigator();

export type RootStackParams = {
  EmployeesScreen: NSProps[];
};

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{title: 'Dashboard'}}
        name="Main"
        component={MainScreen}
      />
      <Stack.Screen
        options={{title: 'Employees List'}}
        name="Employees"
        component={EmployeesScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
