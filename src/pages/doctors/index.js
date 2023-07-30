import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {
  DoctorCategory,
  Gap,
  HomeProfile,
  NewsItem,
  RatedDoctor,
} from '../../components';
import {colors, fonts} from '../../utils';
import {DumDok1, DumDok2, DumDok3, JSONDoctorCategory} from '../../assets';
import UserProfile from '../userProfile';
import DoctorProfile from '../doctorProfile';

export default function Doctors({navigation}) {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.profileWrapper}>
            <Gap height={30} />
            <HomeProfile onPress={() => navigation.navigate(UserProfile)} />
            <Gap height={30} />
            <Text style={styles.welcomeText}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
          </View>
          <View style={styles.scrollWrapper}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={32} />
                {JSONDoctorCategory.data.map(item => {
                  return (
                    <DoctorCategory
                      key={item.id}
                      category={item.category}
                      onPress={() => navigation.navigate('ChooseDoctors')}
                    />
                  );
                })}
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.ratedWrapper}>
            <Text style={styles.labelText}>Top Rated Doctors</Text>
            <RatedDoctor
              avatar={DumDok1}
              name={'Alexa Rachel'}
              desc={'Pediatrician'}
              onPress={() => navigation.navigate(DoctorProfile)}
            />
            <RatedDoctor
              avatar={DumDok2}
              name={'Sunny Frank'}
              desc={'Dentist'}
              onPress={() => navigation.navigate(DoctorProfile)}
            />
            <RatedDoctor
              avatar={DumDok3}
              name={'Poe Minn'}
              desc={'Podiatrist'}
              onPress={() => navigation.navigate(DoctorProfile)}
            />
            <Text style={styles.labelText}>Good News</Text>
          </View>
          <View style={styles.newsContent}>
            <NewsItem />
            <NewsItem />
            <NewsItem />
          </View>
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  welcomeText: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    maxWidth: 221,
  },
  category: {
    flexDirection: 'row',
  },
  scrollWrapper: {
    paddingTop: 16,
    marginHorizontal: -16,
  },
  labelText: {
    fontSize: 16,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    marginTop: 30,
    marginBottom: 16,
  },
  ratedWrapper: {
    paddingHorizontal: 16,
  },
  profileWrapper: {
    paddingHorizontal: 16,
  },
  newsContent: {
    paddingHorizontal: 16,
  },
});
