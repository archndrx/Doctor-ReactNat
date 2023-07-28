import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import IconOnlyButton from './iconOnly';
import ButtonIconSend from './btnIconSend';

export default function Button({type, title, onPress, icon, disable}) {
  if (type === 'icon-only') {
    return <IconOnlyButton icon={icon} onPress={onPress} />;
  }
  if (type === 'btn-icon-send') {
    return <ButtonIconSend disable={disable} />;
  }
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor:
      type === 'secondary'
        ? colors.button.secondary.background
        : colors.button.primary.background,
    paddingVertical: 10,
    borderRadius: 10,
  }),
  text: type => ({
    textAlign: 'center',
    color:
      type === 'secondary'
        ? colors.button.secondary.text
        : colors.button.primary.text,
    fontSize: 18,
    fontFamily: fonts.primary[600],
  }),
});
