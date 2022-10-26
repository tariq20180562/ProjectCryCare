import {Button, Header} from '../../component';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {Formik} from 'formik';
import * as yup from 'yup';
import PhoneInput from 'react-native-phone-number-input';
import Colors from '../../utils/Colors';
const loginSchema = yup.object().shape({
  PhoneNumber: yup
    .string()
    .matches(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      'Enter a valid phone number',
    )
    .required('Phone number is required'),
});
const ForgetPassword = () => {
  return (
    <View>
      <Header
        text={'Please Enter The Correct Mobile Number And Password'}
        title={'Forget Password'}
      />
      <Formik
        initialValues={{
          PhoneNumber: '',
        }}
        onSubmit={(values, {...rest}) => {}}
        validationSchema={loginSchema}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isSubmitting,
        }) => (
          <View style={styles.containerPhoneNumber}>
            <Text style={{color:Colors.primary2}}>Mobile Number</Text>
            <PhoneInput
              onChangeText={handleChange('PhoneNumber')}
              containerStyle={styles.PhoneInput}
              textInputStyle={styles.textInputStyle}
              placeholder={'0597875519'}
              value={values.PhoneNumber}
            />
            {errors.PhoneNumber && touched.PhoneNumber && (
              <Text style={styles.errors}>{errors.PhoneNumber}</Text>
            )}
            <Button
              buttonStyle={styles.ButtonStyle}
              title={'SEND'}
              titleStyle={styles.titleStyle}
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ForgetPassword;
