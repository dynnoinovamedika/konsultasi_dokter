import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header, List} from '../../components'
import { DummyDoctor1 } from '../../assets'
import { colors } from '../../utils'

const ChooseDoctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Pilih Dokter Anak" type="dark" onPress={() => navigation.goBack()}/>
      <List tipe="next" profile={DummyDoctor1} name="Alexander Janie" desc="Wanita" onPress={() => navigation.navigate('Chatting')}/>
      <List tipe="next" profile={DummyDoctor1} name="Alexander Janie" desc="Wanita"/>
      <List tipe="next" profile={DummyDoctor1} name="Alexander Janie" desc="Wanita"/>
      <List tipe="next" profile={DummyDoctor1} name="Alexander Janie" desc="Wanita"/>
      <List tipe="next" profile={DummyDoctor1} name="Alexander Janie" desc="Wanita"/>
    </View>
  )
}

export default ChooseDoctor

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white, flex: 1
  }
})