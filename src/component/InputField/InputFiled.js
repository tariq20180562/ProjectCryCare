import React from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './styles';

const InputField = ({
  label,
  leftIcon,
  rightIcon,
  inputContainerStyle,
  inputStyle,
  containerStyle,
  ...rest
}) => {
  return (
    <View style={[styles.container,containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.inputContainer,inputContainerStyle]}>
        {leftIcon}
        <TextInput
          style={[styles.input, !leftIcon && {marginLeft: -11}, inputStyle]}
          {...rest}
        />
        {rightIcon}
      </View>
    </View>
  );
};

export default InputField;
