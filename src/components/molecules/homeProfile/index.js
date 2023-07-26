import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {DumUser} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function HomeProfile() {
  return (
    <View style={styles.container}>
      <Image source={DumUser} style={styles.avatar} />
      <View>
        <Text style={styles.nameText}>Shayna Melinda</Text>
        <Text style={styles.jobText}>Product Designer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
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
  },
});
