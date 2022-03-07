import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {NSProps} from '../typos/types/fakeType';

interface Props {
  AvatarProps: NSProps;
}

const Avatar: React.FC<Props> = ({AvatarProps}) => {
  const {avatarUrl, country, fullName, jobTitle, team} = AvatarProps;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: avatarUrl}} />
      <View>
        <Text style={styles.fullName}>{fullName}</Text>
        <Text style={styles.jobTeam}>{jobTitle}</Text>
        <Text style={styles.jobTeam}>{team}</Text>
        <Text style={styles.country}>{country}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.7)',
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
    width: 200,
  },
  country: {
    fontSize: 12,
    opacity: 0.8,
    color: '#0099cc',
  },
});

export default Avatar;
