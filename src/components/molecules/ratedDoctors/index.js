import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {ICStar} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function RatedDoctor({name, desc, avatar, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={avatar} style={styles.avatar} />
      <View style={styles.textWrapper}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.jobText}>{desc}</Text>
      </View>
      <View style={styles.rate}>
        <ICStar />
        <ICStar />
        <ICStar />
        <ICStar />
        <ICStar />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
    alignItems: 'center',
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
