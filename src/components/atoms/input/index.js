import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {colors, fonts} from '../../../utils';

const Input = ({label}) => {
  const [border] = useState(colors.border);
  const onFocusForm = () => {};
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput onFocus={onFocusForm} onBlur style={styles.input(border)} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: border => ({
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
    padding: 12,
  }),
  label: {
    fontSize: 16,
    color: colors.text.secondary,
    marginBottom: 6,
    fontFamily: fonts.primary[400],
  },
});
