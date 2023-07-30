import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Button, Gap, Header, Input} from '../../components';
import {colors, useForm} from '../../utils';

export default function Register({navigation}) {
  const [form, setForm] = useForm({
    fullName: '',
    job: '',
    email: '',
    pass: '',
  });

  const onContinue = () => {
    console.log(form);
    navigation.navigate('UploadPhoto');
  };

  return (
    <View style={styles.page}>
      <Header title={'Daftar Akun'} onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Input
            label={'Full Name'}
            value={form.fullName}
            onChangeText={value => setForm('fullName', value)}
          />
          <Gap height={24} />
          <Input
            label={'Pekerjaan'}
            value={form.job}
            onChangeText={value => setForm('job', value)}
          />
          <Gap height={24} />
          <Input
            label={'Email Address'}
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Gap height={24} />
          <Input
            label={'Password'}
            value={form.pass}
            onChangeText={value => setForm('pass', value)}
            secureTextEntry={true}
          />
          <Gap height={40} />
          <Button title={'Continue'} onPress={onContinue} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
