import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {DumHos1} from '../../../assets';

import {colors, fonts} from '../../../utils';

export default function ListHospitals() {
  return (
    <View style={styles.container}>
      <Image source={DumHos1} style={styles.image} />
      <View>
        <Text style={styles.title}>Rumah Sakit</Text>
        <Text style={styles.title}>Citra Bunga Merdeka</Text>
        <Text style={styles.subTitle}>Jln. Surya Sejahtera 20</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 60,
    marginRight: 16,
  },
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
  },
  subTitle: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    marginTop: 6,
  },
});
