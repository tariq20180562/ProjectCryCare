import {
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Colors from '../../utils/Colors';

import PhoneInput from 'react-native-phone-number-input';
import Entypo from 'react-native-vector-icons/Entypo';
import {styles} from './styles';
import React, {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {Formik} from 'formik';
import {Header, InputField, Button} from '../../component/';
import * as yup from 'yup';
const axios = require('axios').default;

const loginSchema = yup.object().shape({
  email: yup.string().required('email is required').email('invalid Email'),
  PhoneNumber: yup
    .string()
    .matches(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      'Enter a valid phone number',
    )
    .required('Phone number is required'),
  name: yup
    .string()
    .matches(/(\w.+\s).+/, 'Enter at least 2 names')
    .required('Full name is required'),
  password: yup
    .string()
    .required()
    .matches(
      /^(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9!@#$%./^&*()_+<>,~`"':;]{8,}$/,
      'password must 8 char',
    ),
});
const Message = ({res}) => {
  return (
    <View>
      <Text style={styles.Message}>{res}</Text>
    </View>
  );
};
const SignUp = ({navigation: {navigate}}) => {
  const [ispasswordShown, setIsPasswordShown] = useState(true);
  const [message, setMessage] = useState('');
  const showPasswordHandler = () => {
    setIsPasswordShown(currentState => !currentState);
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView>
        <Formik
          initialValues={{
            email: '',
            password: '',
            PhoneNumber: '',
            name: '',
            nameFather: '',
          }}
          onSubmit={(values, {...rest}) => {
            axios({
              method: 'post',
              url: 'https://student.valuxapps.com/api/register',
              params: {
                email: values.email,
                password: values.password,
                name: values.name,
                phone: values.PhoneNumber,
              },
            })
              .then(res =>
                res.data.status
                  ? navigate('Login')
                  : setMessage(res.data.message),
              )
              .catch(err => console.log('err', err));
          }}
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
            <View>
              <Header
                title={'SIGN UP'}
                text={'Please Enter The Correct Mobile Number And Password'}
              />
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
              </View>
              <InputField
                placeholder={'*************'}
                inputContainerStyle={styles.inputContainerStyle}
                inputStyle={styles.inputStyle}
                onChangeText={handleChange('password')}
                value={values.password}
                onBlur={handleBlur('password')}
                label={'Password'}
                containerStyle={styles.containerStyle}
                secureTextEntry={ispasswordShown}
                rightIcon={
                  ispasswordShown ? (
                    <Entypo
                      name="eye-with-line"
                      size={24}
                      color="#999999"
                      onPress={showPasswordHandler}
                    />
                  ) : (
                    <Entypo
                      name="eye"
                      size={24}
                      color="#999999"
                      onPress={showPasswordHandler}
                    />
                  )
                }
              />
              {errors.password && touched.password && (
                <Text style={styles.errors}>{errors.password}</Text>
              )}

              <InputField
                label={'Full Name'}
                inputStyle={styles.inputStyle}
                containerStyle={styles.containerStyle}
                inputContainerStyle={styles.inputContainerStyle}
                placeholder={'Tariq Hijazi'}
                value={values.name}
                onChangeText={handleChange('name')}
              />
              {errors.name && touched.name && (
                <Text style={styles.errors}>{errors.name}</Text>
              )}

              <InputField
                placeholder={'mail@gmail.com'}
                inputContainerStyle={styles.inputContainerStyle}
                inputStyle={styles.inputStyle}
                onChangeText={handleChange('email')}
                value={values.email}
                onBlur={handleBlur('email')}
                label={'E-mail'}
                containerStyle={styles.containerStyle}
              />
              {errors.email && touched.email && (
                <Text style={styles.errors}>{errors.email}</Text>
              )}

              <InputField
                label={'Responsible For The Child'}
                inputStyle={styles.inputStyle}
                containerStyle={styles.containerStyle}
                inputContainerStyle={styles.inputContainerStyle}
                placeholder={'My Father'}
                value={values.nameFather}
                onChangeText={handleChange('nameFather')}
              />

              <Button
                buttonStyle={styles.ButtonStyle}
                title={'SIGN UP'}
                titleStyle={styles.titleStyle}
                onPress={handleSubmit}
              />
              {isSubmitting && <Message res={message} />}
            </View>
          )}
        </Formik>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default SignUp;
