import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Gap, Header, ListItems, Profile} from '../../components';
import {colors} from '../../utils';
import UpdateProfile from '../updateProfile';

export default function UserProfile({navigation}) {
  return (
    <View style={styles.page}>
      <Header title={'Profile'} onPress={() => navigation.goBack()} />
      <Gap height={10} />
      <Profile name={'Shayna Melinda'} desc={'Product Designer'} />
      <Gap height={14} />
      <ListItems
        type={'next'}
        name={'Edit Profile'}
        desc={'Last Update Yesterday'}
        icon={'edit'}
        onPress={() => navigation.navigate(UpdateProfile)}
      />
      <ListItems
        type={'next'}
        name={'Edit Profile'}
        desc={'Last Update Yesterday'}
        icon={'lang'}
      />
      <ListItems
        type={'next'}
        name={'Edit Profile'}
        desc={'Last Update Yesterday'}
        icon={'rate'}
      />
      <ListItems
        type={'next'}
        name={'Edit Profile'}
        desc={'Last Update Yesterday'}
        icon={'help'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
  },
});
