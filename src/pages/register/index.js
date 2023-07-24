import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Input} from '../../components';

export default function Register({navigation}) {
  return (
    <View>
      <Header title={'Daftar Akun'} onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <Input label={'Full Name'} />
        <Gap height={24} />
        <Input label={'Pekerjaan'} />
        <Gap height={24} />
        <Input label={'Email Address'} />
        <Gap height={24} />
        <Input label={'Password'} />
        <Gap height={40} />
        <Button title={'Continue'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
