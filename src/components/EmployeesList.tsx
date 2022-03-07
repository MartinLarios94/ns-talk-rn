import React from 'react';
import {FlatList, Image, StatusBar, StyleSheet, View} from 'react-native';
import {NICA_SOURCE_DB} from '../data/faker';
import Avatar from './Avatar';

const EmployeesList = () => {
  return (
    <View>
      <Image
        source={{
          uri: 'https://media-exp1.licdn.com/dms/image/C4E0BAQHSr1Nmk8lTeQ/company-logo_200_200/0/1638462332651?e=2159024400&v=beta&t=JU3VI6_9C39KjSuVW2E4CkfN8GaeujxNYSCrIxJJDmY',
        }}
        style={StyleSheet.absoluteFillObject}
        blurRadius={20}
      />
      <FlatList
        data={NICA_SOURCE_DB}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <Avatar AvatarProps={item} />}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    padding: 20,
    paddingTop: StatusBar.currentHeight || 42,
  },
});

export default EmployeesList;
