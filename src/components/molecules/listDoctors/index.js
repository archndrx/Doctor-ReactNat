import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {DumDok2} from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function ListDoctors() {
  return (
    <View style={styles.container}>
      <Image source={DumDok2} style={styles.avatar} />
      <View>
        <Text style={styles.name}>Alexander Jannie</Text>
        <Text style={styles.chat}>
          Baik ibu, terima kasih banyak atas wakt...
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
        borderBottomColor: colors.border,
    alignItems:'center',
  },
  avatar: {
    width: 46,
    height: 46,
    marginRight: 16,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
  },
  chat: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
  },
});
