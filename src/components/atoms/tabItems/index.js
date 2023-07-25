import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  ICDoctors,
  ICDoctorsActive,
  ICHospitals,
  ICHospitalsActive,
  ICMessages,
  ICMessagesActive,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function TabItems({title, active, onPress, onLongPress}) {
  const Icon = () => {
    if ({title} === 'Doctors') {
      return active ? <ICDoctorsActive /> : <ICDoctors />;
    }
    if (title === 'Messages') {
      return active ? <ICMessagesActive /> : <ICMessages />;
    }
    if (title === 'Hospitals') {
      return active ? <ICHospitalsActive /> : <ICHospitals />;
    }
    return active ? <ICDoctorsActive /> : <ICDoctors />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: active => ({
    fontSize: 10,
    color: active ? colors.text.active : colors.text.inactive,
    fontFamily: fonts.primary[600],
    marginTop: 4,
  }),
});
