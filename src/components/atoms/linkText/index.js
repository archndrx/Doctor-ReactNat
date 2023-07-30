import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {fonts} from '../../../utils';

export default function LinkText({text, size, align, onPress}) {
  return (
    <TouchableOpacity>
      <Text style={styles.text(size, align)} onPress={onPress}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: (size, align) => ({
    fontSize: size,
    color: '#7D8797',
    textAlign: align,
    fontFamily: fonts.primary[400],
    textDecorationLine: 'underline',
  }),
});
