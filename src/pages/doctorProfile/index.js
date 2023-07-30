import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Profile, ProfileItem} from '../../components';
import {colors} from '../../utils';
import Chat from '../chat';

export default function DoctorProfile({navigation}) {
  return (
    <View style={styles.page}>
      <Header title={'Doctor Profile'} onPress={() => navigation.goBack()} />
      <Profile name={'Alexa Rachel'} desc={'Pediatrist'} />
      <Gap height={10} />
      <ProfileItem label={'Alumnus'} desc={'Universitas Indonesia, 2020'} />
      <ProfileItem
        label={'Tempat Praktik'}
        desc={'Rumah Sakit Umum, Bandung'}
      />
      <ProfileItem label={'No. STR'} desc={'092190410171'} />
      <View style={styles.buttonAction}>
        <Button
          title={'Start Consultation'}
          onPress={() => navigation.navigate(Chat)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  buttonAction: {
    paddingHorizontal: 40,
    paddingTop: 23,
  },
});
