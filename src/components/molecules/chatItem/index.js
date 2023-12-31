import {StyleSheet, Text, View,Image} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import IsMe from './isMe';
import { DumDok1 } from '../../../assets';

export default function ChatItem({ isMe }) {
  if (isMe) {
    return <IsMe />;
  }
  return (
    <View style={styles.container}>
      <Image source={DumDok1} style={styles.avatar} />
      <View>

      <View style={styles.chatContent}>
        <Text style={styles.text}>
          Oh tentu saja tidak karena jeruk itu sangat sehat...
        </Text>
      </View>
      <Text style={styles.subtext}>4.20 AM</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingLeft: 16,
    flexDirection:'row',
  },
  avatar: {
    width: 30,
    height: 30,
    marginRight:12,
  },
  chatContent: {
    maxWidth: '80%',
    padding: 12,
    paddingRight: 18,
    backgroundColor: colors.primary,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.white,
  },
  subtext: {
    fontSize: 11,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginTop: 8,
  },
});
