import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DumUser} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.avatarBorder}>
        <Image source={DumUser} style={styles.avatar} />
      </View>
      <Text style={styles.nameText}>Shayna Melinda</Text>
      <Text style={styles.jobText}>Product Designer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
  },
  avatarBorder: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderRadius: 130 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.border,
  },
  nameText: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 16,
  },
  jobText: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.secondary,
    marginTop: 2,
  },
});
