import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Header, ListItems} from '../../components';
import {DumDok1} from '../../assets';
import Chat from '../chat';

export default function ChooseDoctors({navigation}) {
  return (
    <View style={styles.page}>
      <Header
        title={'Pilih Dokter Anak'}
        type={'dark'}
        onPress={() => navigation.goBack()}
      />
      <ListItems
        profile={DumDok1}
        name={'Alexander Jannie'}
        desc={'Wanita'}
        type={'next'}
        onPress={() => navigation.navigate(Chat)}
      />
      <ListItems
        profile={DumDok1}
        name={'Alexander Jannie'}
        desc={'Wanita'}
        type={'next'}
      />
      <ListItems
        profile={DumDok1}
        name={'Alexander Jannie'}
        desc={'Wanita'}
        type={'next'}
      />
      <ListItems
        profile={DumDok1}
        name={'Alexander Jannie'}
        desc={'Wanita'}
        type={'next'}
      />
      <ListItems
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
