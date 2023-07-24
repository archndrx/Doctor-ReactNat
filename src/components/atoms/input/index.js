import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

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
    borderColor: '#E9E9E9',
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    color: '#7D8797',
    fontFamily: 'Nunito-Regular',
  },
});
