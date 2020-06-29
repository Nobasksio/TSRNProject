import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import {IPhone, TextFieldProps} from '../interfaces/interfaces';
import {THEME} from "../style/theme";

export const TextField: React.FC<TextFieldProps> = (props) => {

  const action = props.onChange;

  const typeKeyPad = props.typeKeyPad || 'default';
  return (
    <View style={styles.textFieldBlock}>
      <Text style={styles.nameField}>{props.nameField}</Text>
      <TextInput
        style={styles.textField}
        keyboardType={typeKeyPad}
        onChangeText={text => action(text.valueOf())}
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
  },
  nameField: {
    color: '#828282',
  },
});
