import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {ILLogo} from '../../assets';

const Splash = () => (
  <View style={styles.page}>
    <ILLogo />
    <Text style={styles.title}>My Doctor</Text>
  </View>
);

export default Splash;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    color: '#112340',
    marginTop: 20,
  },
});
