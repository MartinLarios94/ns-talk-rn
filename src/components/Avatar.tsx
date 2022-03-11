import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {NSProps} from '../typos/types/fakeType';
import Icon from 'react-native-vector-icons/Ionicons';
import {MotiView} from 'moti';

interface Props {
  AvatarProps: NSProps;
}

const Avatar: React.FC<Props> = ({AvatarProps}) => {
  const {avatarUrl, country, fullName, jobTitle, team} = AvatarProps;
  return (
    <MotiView
      delay={500}
      from={{
        opacity: 0,
        transform: [{scale: 0}],
      }}
      animate={{
        opacity: 1,
        transform: [{scale: 1}],
      }}
      transition={{type: 'timing'}}
      style={styles.container}>
      <Image style={styles.image} source={{uri: avatarUrl}} />
      <View>
        <Text style={styles.fullName}>{fullName}</Text>
        <View style={styles.wrap}>
          <Icon name="briefcase-outline" color="grey" size={20} />
          <Text style={styles.jobTeam}>{jobTitle}</Text>
        </View>
        <View style={styles.wrap}>
          <Icon name="people-outline" color="grey" size={20} />
          <Text style={styles.jobTeam}>{team}</Text>
        </View>
        <View style={styles.wrap}>
          <Icon name="location-outline" color="grey" size={20} />
          <Text style={styles.country}>{country}</Text>
        </View>
      </View>
    </MotiView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.5)',
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 70,
    marginRight: 10,
  },
  fullName: {
    fontSize: 20,
    fontWeight: '700',
    width: 200,
  },
  jobTeam: {
    fontSize: 14,
    opacity: 0.7,
    width: 220,
    paddingLeft: 5,
  },
  country: {
    fontSize: 14,
    opacity: 0.8,
    color: '#110894',
    paddingLeft: 5,
  },
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2,
  },
});

export default Avatar;
