import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {DummyDoctor2, IconEditProfile, IconHelp, IconLanguage, IconNext, IconRate} from '../../../assets';
import {colors, fonts} from '../../../utils';

const List = ({profile, name, desc, tipe, onPress, icon}) => {
  const Icon = () => {
    if (icon === 'edit-profile') {
      return <Image source={IconEditProfile}/>;
    }
    if (icon === 'language') {
      return <Image source={IconLanguage}/>;
    }
    if (icon === 'rate') {
      return <Image source={IconRate}/>
    }
    if (icon === 'help') {
      return <Image source={IconHelp}/>;
    }
    return <Image source={IconEditProfile}/>;
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
    {icon ? <Icon /> : <Image source={profile} style={styles.avatar} />}
    <View style={styles.content}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
    {tipe === 'next' && <Image source={IconNext}/>}
  </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {flex: 1, marginLeft: 16},
  avatar: {width: 46, height: 46, borderRadius: 46 / 2},
  name: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  desc: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    textTransform: 'capitalize',
  },
});
