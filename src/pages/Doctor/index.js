import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DoctorCategory, HomeProfile, RatedDoctor} from '../../components';

const Doctor = () => {
  return (
    <View>
      <HomeProfile />
      <Text>Mau konsultasi dengan siapa hari ini?</Text>
      <DoctorCategory/>
      <DoctorCategory/>
      <DoctorCategory/>
      <DoctorCategory/>
      <Text>Top Rated Doctors</Text>
      <RatedDoctor/>
      <RatedDoctor/>
      <RatedDoctor/>
      <Text>Good News</Text>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({});
