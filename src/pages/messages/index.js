import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {ListItems} from '../../components';
import {colors, fonts} from '../../utils';
import {DumDok1, DumDok2, DumDok3} from '../../assets';

export default function Messages() {
  const [doctors] = useState([
    {
      id: 1,
      profile: DumDok1,
      name: 'Alexander Jannie',
      desc: 'Baik ibu, terima kasih banyak atas wakt...',
    },
    {
      id: 2,
      profile: DumDok2,
      name: 'Nairobi Putri Hayza',
      desc: 'Oh tentu saja tidak karena jeruk it...',
    },
    {
      id: 3,
      profile: DumDok3,
      name: 'John McParker Steve',
      desc: 'Oke menurut pak dokter bagaimana unt...',
    },
  ]);
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {doctors.map(doctor => {
          return (
            <ListItems
              key={doctor.id}
              profile={doctor.profile}
              name={doctor.name}
              desc={doctor.desc}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 20,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    marginTop: 30,
    marginLeft: 16,
  },
});
