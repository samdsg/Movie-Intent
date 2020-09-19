import * as React from 'react';
import {Text, View, StyleSheet, StatusBar, Image} from 'react-native';
import {Header} from 'react-native-elements';
import {mode} from '../types/types';
import SearchButton from './searchButton';

interface HeaderProps {
  theme: mode;
  isDetailsScreen: boolean;
}

const MyHeader = ({theme, isDetailsScreen}: HeaderProps) => {
  return (
    <View style={{backgroundColor: 'black'}}>
      <StatusBar
        barStyle={theme == 'dark' ? 'light-content' : 'dark-content'}
        translucent={isDetailsScreen == true ? true : false}
        backgroundColor="transparent"
        showHideTransition="fade"
      />
      {!isDetailsScreen ? (
        <Header
          barStyle={theme == 'dark' ? 'dark-content' : 'dark-content'}
          containerStyle={{
            backgroundColor: theme == 'dark' ? 'black' : 'white',
            borderBottomColor: 'white',
          }}
          leftComponent={
            <View
              style={{
                paddingVertical: 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/logo2.png')}
                style={styles.logo}
              />
            </View>
          }
          rightComponent={
            <SearchButton theme={theme == 'dark' ? 'dark' : 'light'} />
          }
        />
      ) : (
        <></>
      )}
    </View>
  );
};

export default MyHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginVertical: 10,
    backgroundColor: 'red',
  },
  logo: {
    width: 35,
    height: 40,
  },
  //   logoTitle: {
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     fontFamily: 'HindVadodara-Bold',
  //     fontSize: 15,
  //   },
});