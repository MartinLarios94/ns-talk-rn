import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import CardMain from '../components/CardMain';
import {DataFiltered} from '../context/db';

const MainScreen = () => {
  const getEmployees = DataFiltered('', '');

  return (
    <ImageBackground
      style={{flex: 1}}
      blurRadius={7}
      source={require('../assets/ns.png')}>
      <View style={mainStyles.container}>
        <CardMain
          Title="Employees"
          Screen="Employees"
          Image={{
            uri: 'https://media-exp1.licdn.com/dms/image/C5622AQE3mmazmIm69Q/feedshare-shrink_800/0/1631578234881?e=1648684800&v=beta&t=dYOv0z4JXwq9q9M3oqIISRjWRO3NQ-ccQWKuN3KybYY',
          }}
          data={getEmployees}
        />
        <CardMain
          Title="Filtered Employees"
          Screen="Filter"
          Image={{
            uri: 'https://media-exp1.licdn.com/dms/image/C561BAQG2_kywxM9I3A/company-background_10000/0/1619825388099?e=2159024400&v=beta&t=QVRNvXwHl0oRsCurPxa_LZF2XAwqRVWDUcM-Xmu7dkY',
          }}
          data={getEmployees}
        />
      </View>
    </ImageBackground>
  );
};

const mainStyles = StyleSheet.create({
  shape: {
    justifyContent: 'center',
    height: 250,
    width: 250,
    borderRadius: 25,
    marginRight: 10,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    borderRadius: 10,
    height: 200,
    width: 150,
    marginHorizontal: 10,
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

export default MainScreen;
