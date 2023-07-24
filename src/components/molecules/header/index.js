import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ICBackArrow} from '../../../assets';
import {Gap} from '../../atoms';
import {colors} from '../../../utils';

export default function Header() {
  return (
    <View style={styles.container}>
      <ICBackArrow />
      <Text style={styles.text}>Daftar Akun</Text>
      <Gap width={24} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 32,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: colors.text.primary,
    fontFamily: 'Nunito-SemiBold',
    textAlign: 'center',
    flex: 1,
  },
});
