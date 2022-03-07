import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView} from 'react-native';
import EmployeesList from '../components/EmployeesList';
import {RootStackParams} from '../navigation/StackNavigator';
import {GLOBAL_STYLES} from '../theme/globalTheme';

interface Props extends StackScreenProps<RootStackParams, 'EmployeesScreen'> {}

const EmployeesScreen: React.FC<Props> = ({route}) => {
  const data = route.params;
  return (
    <SafeAreaView style={GLOBAL_STYLES.container}>
      <EmployeesList data={data} />
    </SafeAreaView>
  );
};

export default EmployeesScreen;
