import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {Button, Gap, Header, LinkText} from '../../components';
import {ICAddPhoto, ICRemovePhoto, ILUserPhotoNull} from '../../assets';
import {colors, fonts} from '../../utils';
import * as ImagePicker from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';

export default function UploadPhoto({navigation}) {
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILUserPhotoNull);
  const getImage = () => {
    ImagePicker.launchImageLibrary({}, response => {
      console.log('Response = ', response);

      if (response.didCancel || response.error) {
        showMessage({
          message: 'Failed to upload photo',
          type: 'default',
        });
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.assets[0].uri};
        setPhoto(source);
        setHasPhoto(true);
      }
    });
  };
  return (
    <View style={styles.page}>
      <Header title={'Upload Photo'} onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
            <Image source={photo} style={styles.avatar} />
            {hasPhoto && <ICRemovePhoto style={styles.addPhoto} />}
            {!hasPhoto && <ICAddPhoto style={styles.addPhoto} />}
          </TouchableOpacity>
          <Text style={styles.nameText}>Shayna Melinda</Text>
          <Text style={styles.jobText}>Product Designer</Text>
        </View>
        <View>
          <Button
            title={'Upload and Continue'}
            onPress={() => navigation.replace('MainApp')}
            disable={!hasPhoto}
          />
          <Gap height={30} />
          <LinkText
            text={'Skip for this'}
            size={16}
            align={'center'}
            onPress={() => navigation.replace('MainApp')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal: 40,
    paddingBottom: 64,
    flex: 1,
    justifyContent: 'space-between',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  addPhoto: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  nameText: {
    fontSize: 24,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    textAlign: 'center',
  },
  jobText: {
    fontSize: 18,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    textAlign: 'center',
    marginTop: 4,
  },
});
