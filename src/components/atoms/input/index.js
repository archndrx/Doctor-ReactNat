import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

export default function Input({label}) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.border,
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    color: colors.text.secondary,
    fontFamily: fonts.primary[400],
  },
});
