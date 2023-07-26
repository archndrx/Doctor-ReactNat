import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DumDok1, ICStar} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function RatedDoctor() {
  return (
    <View style={styles.container}>
      <Image source={DumDok1} style={styles.avatar} />
      <View style={styles.textWrapper}>
        <Text style={styles.nameText}>Alexa Rachel</Text>
        <Text style={styles.jobText}>Pediatrician</Text>
      </View>
      <View style={styles.rate}>
        <ICStar />
        <ICStar />
        <ICStar />
        <ICStar />
        <ICStar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 12,
  },
  nameText: {
    fontSize: 16,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
  },
  jobText: {
    fontSize: 12,
    color: colors.text.secondary,
    fontFamily: fonts.primary[400],
    marginTop: 2,
  },
  textWrapper: {
    flex: 1,
  },
  rate: {
    flexDirection: 'row',
  },
});
