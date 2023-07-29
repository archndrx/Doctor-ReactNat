import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import {
  ICEditProfile,
  ICHelp,
  ICLanguage,
  ICNextArrow,
  ICRate,
} from '../../../assets';

export default function ListItems({profile, name, desc, type, onPress, icon}) {
  const Icon = () => {
    if (icon === 'edit') {
      return <ICEditProfile />;
    }
    if (icon === 'help') {
      return <ICHelp />;
    }
    if (icon === 'lang') {
      return <ICLanguage />;
    }
    if (icon === 'rate') {
      return <ICRate />;
    }
    return <ICEditProfile />;
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon ? <Icon /> : <Image source={profile} style={styles.avatar} />}
      <View style={styles.textWrapper}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.chat}>{desc}</Text>
      </View>
      {type === 'next' && <ICNextArrow />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textWrapper: {
    flex: 1,
    marginLeft: 16,
  },
  avatar: {
    width: 46,
    height: 46,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
  },
  chat: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
  },
});
