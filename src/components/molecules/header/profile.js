import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Button} from '../../atoms';
import {colors, fonts} from '../../../utils';
import {DumDok1} from '../../../assets';

export default function Header({onPress, title, subtitle}) {
  return (
    <View style={styles.container}>
      <Button type={'icon-only'} icon={'back-light'} onPress={onPress} />
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.subText}>{subtitle}</Text>
      </View>

      <Image source={DumDok1} style={styles.avatar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 16,
    paddingVertical: 30,
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'space-between',
  },
  textWrapper: {
    flexDirection: 'column',
  },
  text: {
    fontSize: 20,
    color: colors.white,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
  },
  subText: {
    fontSize: 14,
    color: colors.text.subtitle,
    fontFamily: fonts.primary[400],
    textAlign: 'center',
    marginTop: 6,
  },
  avatar: {
    width: 46,
    height: 46,
  },
});
