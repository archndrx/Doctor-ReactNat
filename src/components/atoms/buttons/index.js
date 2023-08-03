import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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
  if (disable) {
    return (
      <View style={styles.disableBg}>
        <Text style={styles.disableText}>{title}</Text>
      </View>
    );
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
  disableBg: {
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: colors.button.disable.background,
  },
  disableText: {
    textAlign: 'center',
    color: colors.button.disable.text,
    fontSize: 18,
    fontFamily: fonts.primary[600],
  },
});
