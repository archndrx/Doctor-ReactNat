import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ListDoctors} from '../../components';
import {colors, fonts} from '../../utils';

export default function Messages() {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        <ListDoctors />
        <ListDoctors />
        <ListDoctors />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 20,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    marginTop: 30,
    marginLeft: 16,
  },
});
