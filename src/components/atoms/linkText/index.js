import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function LinkText({text, size, align}) {
  return (
    <View>
      <Text style={styles.text(size, align)}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: (size, align) => ({
    fontSize: size,
    color: '#7D8797',
    textAlign: align,
    fontFamily: 'Nunito-Regular',
    textDecorationLine: 'underline',
  }),
});
