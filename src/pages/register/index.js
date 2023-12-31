import {ScrollView, StyleSheet, View} from 'react-native';
import {useState} from 'react';
import React from 'react';
import {Button, Gap, Header, Input, Loading} from '../../components';
import {colors, storeData, useForm} from '../../utils';
import {showMessage} from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export default function Register({navigation}) {
  const [form, setForm] = useForm({
    fullName: '',
    job: '',
    email: '',
    pass: '',
  });

  const [loading, setLoading] = useState(false);

  const onContinue = () => {
    console.log(form);
    setLoading(true);
    auth()
      .createUserWithEmailAndPassword(form.email, form.pass)
      .then(success => {
        setLoading(false);
        setForm('reset');
        const data = {
          fullName: form.fullName,
          job: form.job,
          email: form.email,
        };
        database()
          .ref('/users/' + success.user.uid + '/')
          .set(data)
          .then(() => console.log('Data set.'));
        storeData('user', data);
        navigation.navigate('UploadPhoto');
        console.log('register success', success);
      })
      .catch(error => {
        const errorMessage = error.message;
        setLoading(false);
        showMessage({
          message: errorMessage,
          backgroundColor: colors.error,
          color: colors.white,
        });
        console.log('register error : ', errorMessage);
      });
  };

  return (
    <>
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
      {loading && <Loading />}
    </>
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
