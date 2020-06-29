import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

import {TextInputMask} from "react-native-masked-text";
import {THEME} from "../style/theme";
import {TextFieldProps} from "../interfaces/interfaces";

export const PhoneField: React.FC<TextFieldProps> = (props) => {
  const action = props.onChange;
  return (
    <View style={styles.textFieldBlock}>
      <Text style={styles.nameField}>{props.nameField}</Text>
      <TextInputMask
        type={'cel-phone'}
        options={{
          withDDD: true,
          dddMask: '+7 (999) 999-99-99'
        }}
        maxLength={18}
        keyboardType={'phone-pad'}
        style={styles.textField}
        onChangeText={(value) => action(value)}
        value={props.value}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  textFieldBlock: {
    paddingTop: 15,
    flex: 1,
  },
  textField: {
    borderRadius: 10,
    borderColor: '#DADADA',
    borderWidth: 1,
    borderStyle: 'solid',
    marginTop: 6,
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 18,
    fontFamily: THEME.REGULAR_FONT,
  },
  nameField: {
    color: '#828282',
  },
});
