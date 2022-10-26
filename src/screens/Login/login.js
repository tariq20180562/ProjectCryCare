import {
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {styles} from './styles';
import React, {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {Formik} from 'formik';
import {Header, InputField, Button} from '../../component/';
import * as yup from 'yup';
const axios = require('axios').default;
const Message = ({res}) => {
  return (
    <View>
      <Text style={styles.Message}>{res}</Text>
    </View>
  );
};
const loginSchema = yup.object().shape({
  email: yup.string().required('email is required').email('invalid Email'),
  password: yup
    .string()
    .required()
    .matches(
      /^(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9!@#$%./^&*()_+<>,~`"':;]{8,}$/,
      'password must 8 char',
    ),
});

const Login = ({navigation: {navigate}}) => {
  const [ispasswordShown, setIsPasswordShown] = useState(true);
  const [message, setMessage] = useState('');
  const showPasswordHandler = () => {
    setIsPasswordShown(currentState => !currentState);
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView>
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={(values, {...rest}) => {
            axios({
              method: 'post',
              url: 'https://student.valuxapps.com/api/login',
              params: {
                email: values.email,
                password: values.password,
              },
            })
              .then(res =>
                res.data.status
                  ? navigate('Home')
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
                title={'SIGN IN'}
                text={'Please Enter The Correct Mobile Number And Password'}
              />
              <InputField
                placeholder={'mail@gmail.com'}
                inputContainerStyle={styles.inputContainerStyle}
                inputStyle={styles.inputStyle}
                onChangeText={handleChange('email')}
                value={values.email}
                onBlur={handleBlur('email')}
                label={'UserName Or E-mail'}
                containerStyle={styles.containerStyle}
              />
              {errors.email && touched.email && (
                <Text style={styles.errors}>{errors.email}</Text>
              )}

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

              <Pressable onPress={()=>navigate('Forget')}>
                <Text style={styles.forgetText}>Forget Password ?</Text>
              </Pressable>
              <Button
                buttonStyle={styles.ButtonStyle}
                title={'SIGN IN'}
                titleStyle={styles.titleStyle}
                onPress={handleSubmit}
              />
              {isSubmitting && <Message res={message} />}
              <View style={styles.signupStyleConatiner}>
                <Text>Create a new account </Text>
                <Pressable onPress={() => navigate('SignUp')}>
                  <Text style={styles.SignUpText}>SIGN UP</Text>
                </Pressable>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default Login;
