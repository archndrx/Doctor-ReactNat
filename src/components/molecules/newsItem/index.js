import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {DumNews1} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function NewsItem() {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>
          Is it safe to stay at home during coronavirus?
        </Text>
        <Text style={styles.subTitle}>Today</Text>
      </View>

      <Image source={DumNews1} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: colors.border,
    paddingBottom: 12,
    paddingTop: 16,
  },
  image: {
    width: 80,
    height: 60,
    borderRadius: 11,
  },
  titleWrapper: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    maxWidth: '90%',
  },
  subTitle: {
    fontSize: 12,
    color: colors.text.secondary,
    fontFamily: fonts.primary[400],
    marginTop: 4,
  },
});
