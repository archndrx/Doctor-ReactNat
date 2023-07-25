import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap} from '../../atoms';
import {colors, fonts} from '../../../utils';

export default function Header({onPress, title}) {
  return (
    <View style={styles.container}>
      <Button type={'icon-only'} icon={'back-dark'} onPress={onPress} />
      <Text style={styles.text}>{title}</Text>
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
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    flex: 1,
  },
});
