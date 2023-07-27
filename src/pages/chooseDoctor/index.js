import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Header, ListDoctors} from '../../components';
import {DumDok1} from '../../assets';

export default function ChooseDoctors({navigation}) {
  return (
    <View style={styles.page}>
      <Header
        title={'Pilih Dokter Anak'}
        type={'dark'}
        onPress={() => navigation.goBack()}
      />
      <ListDoctors
        profile={DumDok1}
        name={'Alexander Jannie'}
        desc={'Wanita'}
        type={'next'}
      />
      <ListDoctors
        profile={DumDok1}
        name={'Alexander Jannie'}
        desc={'Wanita'}
        type={'next'}
      />
      <ListDoctors
        profile={DumDok1}
        name={'Alexander Jannie'}
        desc={'Wanita'}
        type={'next'}
      />
      <ListDoctors
        profile={DumDok1}
        name={'Alexander Jannie'}
        desc={'Wanita'}
        type={'next'}
      />
      <ListDoctors
        profile={DumDok1}
        name={'Alexander Jannie'}
        desc={'Wanita'}
        type={'next'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
