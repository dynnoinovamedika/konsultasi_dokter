import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, DarkProfile, Gap } from '../..';
import { colors } from '../../../utils';
import { DummyDoctor9 } from '../../../assets';

const Header = ({onPress, title, type}) => {
  if(type === 'dark-profile'){
    return <DarkProfile photo={DummyDoctor9} desc="Dokter Anak" title="Nairobi Putri Hayza" onPress={onPress}/>
  }
  return (
    <View style={styles.container(type)}>
      <Button type="icon-only" icon={type === 'dark' ? 'back-light' : 'back-dark'} onPress={onPress}/>
      <Text style={styles.text(type)}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: (type) => (
    {
      paddingHorizontal: 16,
      paddingVertical: 30,
      backgroundColor:  type === 'dark' ? colors.secondary : colors.white,
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomLeftRadius: type === 'dark' ? 20 : 0,
      borderBottomRightRadius: type === 'dark' ? 20 : 0
    }
  ),
  text: (type)=> (
    {
      textAlign: 'center',
      flex: 1,
      fontSize: 20,
      fontFamily: 'Nunito-SemiBold',
      color: type === 'dark' ? colors.white :  colors.text.primary,
    }
  ),
});
