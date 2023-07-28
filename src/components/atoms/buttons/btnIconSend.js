import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ICSend, ICSendActive} from '../../../assets';
import {colors} from '../../../utils';

export default function ButtonIconSend({disable}) {
  return (
    <View style={styles.container(disable)}>
      {disable && <ICSend />}
      {!disable && <ICSendActive />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: disable => ({
    backgroundColor: disable ? colors.disable : colors.tertiary,
    width: 45,
    height: 45,
    borderRadius: 10,
    padding: 10,
  }),
});
