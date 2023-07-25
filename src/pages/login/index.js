import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILLogo} from '../../assets';
import {Button, Gap, Input, LinkText} from '../../components';
import {colors, fonts} from '../../utils';

export default function Login({navigation}) {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.text}>Masuk dan mulai berkonsultasi</Text>
      <Input label={'Email Address'} />
      <Gap height={24} />
      <Input label={'Password'} />
      <Gap height={10} />
      <LinkText text={'Forgot My Password'} size={12} />
      <Gap height={40} />
      <Button title={'Sign In'} onPress={() => navigation.replace('MainApp')} />
      <Gap height={30} />
      <LinkText text={'Create New Account'} size={16} align={'center'} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    maxWidth: 164,
    marginTop: 40,
    marginBottom: 40,
  },
});
