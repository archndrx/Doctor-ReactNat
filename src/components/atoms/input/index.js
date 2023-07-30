import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {colors, fonts} from '../../../utils';

export default function Input({label}) {
  const [border, setBorder] = useState(colors.border);
  const onFocusForm = () => {
    setBorder(colors.tertiary);
  };
  const onBlurForm = () => {
    setBorder(colors.border);
  };
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        style={styles.input(border)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: border => ({
    padding: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: border,
  }),
  label: {
    fontSize: 16,
    marginBottom: 6,
    color: colors.text.secondary,
    fontFamily: fonts.primary[400],
  },
});
