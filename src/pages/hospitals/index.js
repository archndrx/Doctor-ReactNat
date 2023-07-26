import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {DumHos1, DumHos2, DumHos3, ILBgHospital} from '../../assets';
import {colors, fonts} from '../../utils';
import {ListHospitals} from '../../components';

export default function Hospitals() {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILBgHospital} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.subTitle}>3 Tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospitals
          type={'Rumah Sakit'}
          name={'Citra Bunga Merdeka'}
          address={'Jln. Surya Sejahtera 20'}
          pic={DumHos1}
        />
        <ListHospitals
          type={'Rumah Sakit Anak'}
          name={'Happy Family & Kids'}
          address={'Jln. Surya Sejahtera 20'}
          pic={DumHos2}
        />
        <ListHospitals
          type={'Rumah Sakit Jiwa'}
          name={'Tingkatan Paling Atas'}
          address={'Jln. Surya Sejahtera 20'}
          pic={DumHos3}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  background: {
    height: 240,
    paddingTop: 30,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderRadius: 20,
    marginTop: -30,
    paddingTop: 14,
  },
  title: {
    fontSize: 20,
    color: colors.white,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 14,
    color: colors.white,
    fontFamily: fonts.primary[300],
    textAlign: 'center',
  },
});
