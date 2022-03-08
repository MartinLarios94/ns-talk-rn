import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import {NSProps} from '../typos/types/fakeType';

interface Props {
  Title: string;
  Screen: 'Employees' | 'Filter';
  Image: ImageSourcePropType;
  data: NSProps[];
}

const CardMain: React.FC<Props> = ({Title, Screen, Image, data}) => {
  const {navigate} = useNavigation();
  return (
    <TouchableOpacity
      style={mainStyles.container}
      activeOpacity={0.8}
      onPress={() => navigate(Screen, data)}>
      <ImageBackground
        style={{
          ...mainStyles.imageContainer,
          width: 350,
        }}
        resizeMode="cover"
        imageStyle={mainStyles.image}
        source={Image}>
        <Text style={mainStyles.text}>{Title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const mainStyles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  imageContainer: {
    borderRadius: 10,
    height: 200,
    marginHorizontal: 10,
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.7,
    shadowRadius: 9.98,
    elevation: 6,
  },
  image: {
    borderRadius: 20,
  },
  text: {
    color: 'white',
    fontSize: 20,
    top: 90,
    fontWeight: '400',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.34)',
  },
});
export default CardMain;
