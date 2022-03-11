import React from 'react';
import {FlatList, Image, StatusBar, StyleSheet, View} from 'react-native';
import {NSProps} from '../typos/types/fakeType';
import Avatar from './Avatar';

interface Props {
  data: NSProps[];
}

const EmployeesList: React.FC<Props> = ({data}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://c.smartrecruiters.com/sr-company-logo-prod-dc5/5c00dcdedc0e820006416c2d/huge?r=s3-eu-central-1&_1620085301166',
        }}
        style={StyleSheet.absoluteFillObject}
        blurRadius={7}
        resizeMode="cover"
      />
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <Avatar AvatarProps={item} />}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    padding: 20,
    paddingTop: StatusBar.currentHeight || 42,
  },
});

export default EmployeesList;
