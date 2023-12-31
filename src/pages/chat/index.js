import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ChatItem, Header, InputChat} from '../../components';
import {colors, fonts} from '../../utils';

export default function Chat({navigation}) {
  return (
    <View style={styles.page}>
      <Header
        type={'dark-profile'}
        title={'Nairobi Putri Hayza'}
        subtitle={'Dokter Anak'}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <Text style={styles.chatDate}>Senin, 21 Maret, 2020</Text>
        <ChatItem isMe/>
        <ChatItem />
        <ChatItem isMe/>
      </View>
      <InputChat />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    flex: 1,
  },
  chatDate: {
    fontSize: 11,
    color: colors.text.secondary,
    textAlign: 'center',
    fontFamily: fonts.primary[400],
    marginTop: 20,
    marginBottom: 20,
  },
});
