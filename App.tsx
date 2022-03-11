import 'react-native-gesture-handler';
import 'react-native-reanimated';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
// import {SafeAreaView} from 'react-native';
// import EmployeesList from './src/components/EmployeesList';
// import {NICA_SOURCE_DB} from './src/data/faker';

const App = () => {
  return (
    // <SafeAreaView>
    //   <EmployeesList data={NICA_SOURCE_DB} />
    // </SafeAreaView>
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
