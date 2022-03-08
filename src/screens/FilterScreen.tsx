import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';

import useForm from '../hooks/useForm';

// FAKE DATA
import {COUNTRIES, DEPARTMENTS, TEAMS} from '../helpers/data';
import {NSProps} from '../typos/types/fakeType';
import {NICA_SOURCE_DB} from '../data/faker';

const FilterScreen = () => {
  const {navigate} = useNavigation();
  const {departament, team, country, onChange} = useForm({
    departament: DEPARTMENTS[0].value,
    team: TEAMS[0].value,
    country: COUNTRIES[0].value,
  });

  const onSearch = () => {
    let employees: NSProps[] = [];
    if (
      departament === 'All Departments' &&
      team === 'All Teams' &&
      country === 'All Conutries'
    ) {
      employees = NICA_SOURCE_DB;
    } else {
    }
    employees = NICA_SOURCE_DB.filter(
      item =>
        item.departament === departament &&
        item.team === team &&
        item.country === country,
    );
    navigate('Employees', employees);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.wrap}>
          <Text style={styles.text}>Departaments</Text>
          <Picker
            style={styles.dropDown}
            selectedValue={departament}
            onValueChange={itemValue => onChange(itemValue, 'departament')}>
            {DEPARTMENTS.map((item, i) => (
              <Picker.Item key={i} label={item.label} value={item.value} />
            ))}
          </Picker>
        </View>
        <View style={styles.wrap}>
          <Text style={styles.text}>Teams</Text>
          <Picker
            style={styles.dropDown}
            selectedValue={team}
            onValueChange={itemValue => onChange(itemValue, 'team')}>
            {TEAMS.map((item, i) => (
              <Picker.Item key={i} label={item.label} value={item.value} />
            ))}
          </Picker>
        </View>
        {/* <View style={styles.wrap}>
          <Text style={styles.text}>Job Title</Text>
          <Picker
            style={styles.dropDown}
            selectedValue={job}
            onValueChange={itemValue => onChange(itemValue, 'job')}>
            {JOB_TITLE.map((item, i) => (
              <Picker.Item key={i} label={item.label} value={item.value} />
            ))}
          </Picker>
        </View> */}
        <View style={styles.wrap}>
          <Text style={styles.text}>Country</Text>
          <Picker
            style={styles.dropDown}
            selectedValue={country}
            onValueChange={itemValue => onChange(itemValue, 'country')}>
            {COUNTRIES.map((item, i) => (
              <Picker.Item key={i} label={item.label} value={item.value} />
            ))}
          </Picker>
        </View>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.9}
            onPress={onSearch}>
            <Text style={styles.text}>Search</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrap: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  dropDown: {
    width: '100%',
  },
  button: {
    width: 100,
    height: 50,
    backgroundColor: '#7dcbf5',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default FilterScreen;
