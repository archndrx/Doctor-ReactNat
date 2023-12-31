import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap} from '../../atoms';
import {colors, fonts} from '../../../utils';
import ProfileHeader from './profile';

export default function Header({onPress, title, subtitle, type}) {
  if (type === 'dark-profile') {
    return (
      <ProfileHeader onPress={onPress} title={title} subtitle={subtitle} />
    );
  }
  return (
    <View style={styles.container(type)}>
      <Button
        type={'icon-only'}
        icon={type === 'dark' ? 'back-light' : 'back-dark'}
        onPress={onPress}
      />
      <Text style={styles.text(type)}>{title}</Text>
      <Gap width={24} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: type => ({
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: type === 'dark' ? colors.secondary : colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: type === 'dark' ? 20 : 0,
    borderBottomRightRadius: type === 'dark' ? 20 : 0,
  }),
  text: type => ({
    fontSize: 20,
    color: type === 'dark' ? colors.white : colors.text.primary,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    flex: 1,
  }),
});
