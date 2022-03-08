import React from 'react';
import {
  createStackNavigator,
  // HeaderStyleInterpolators,
  // TransitionSpecs,
} from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import EmployeesScreen from '../screens/EmployeesScreen';
import {NSProps} from '../typos/types/fakeType';
import FilterScreen from '../screens/FilterScreen';

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
      <Stack.Screen
        options={{
          headerShown: false,
          cardStyle: {backgroundColor: '#fff'},
          // gestureDirection: 'horizontal',
          // transitionSpec: {
          //   open: TransitionSpecs.BottomSheetSlideInSpec,
          //   close: TransitionSpecs.BottomSheetSlideOutSpec,
          // },
          // headerStyleInterpolator: HeaderStyleInterpolators.forFade,
          // cardStyleInterpolator: ({current, next, layouts}) => {
          //   return {
          //     cardStyle: {
          //       transform: [
          //         {
          //           translateY: current.progress.interpolate({
          //             inputRange: [0, 1],
          //             outputRange: [layouts.screen.width, 0],
          //           }),
          //         },
          //         {
          //           rotate: current.progress.interpolate({
          //             inputRange: [0, 0.5, 1],
          //             outputRange: [1, 0.5, 0],
          //           }),
          //         },
          //         {
          //           scale: next
          //             ? next.progress.interpolate({
          //                 inputRange: [0, 1],
          //                 outputRange: [1, 0.9],
          //               })
          //             : 1,
          //         },
          //       ],
          //     },
          //     overlayStyle: {
          //       opacity: current.progress.interpolate({
          //         inputRange: [0, 1],
          //         outputRange: [0, 0.5],
          //       }),
          //     },
          //   };
          // },
        }}
        name="Filter"
        component={FilterScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
