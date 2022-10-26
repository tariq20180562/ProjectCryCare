import {StyleSheet} from 'react-native';
import Colors from '../../utils/Colors';

export const styles = StyleSheet.create({
  inputContainerStyle: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginTop: 12,
  },
  inputStyle: {
    textAlign: 'left',
    fontSize: 16,
  },
  containerStyle: {
    marginTop: 16,
    width: '90%',
  },
  forgetText: {
    textAlign: 'right',
    width: '93%',
    marginVertical: 10,
  },
  ButtonStyle: {
    backgroundColor: Colors.primary2,
    width: '90%',
    height: 50,
    alignSelf: 'center',
    marginVertical: 13,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupStyleConatiner: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 17,
  },
  SignUpText: {
    color: Colors.primary2,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  errors: {
    fontSize: 18,
    color: 'red',
    alignSelf: 'flex-start',
    left: 25,
    top: 10,
  },
  PhoneInput: {
    height: 60,
    width: '100%',
    marginTop: 12,
    borderRadius:15
  },
  textInputStyle: {
    fontSize: 15,
    padding: 0,
    width: '100%',
  },
  containerPhoneNumber:{
    width: '90%',
    alignSelf: 'center',
    marginTop:26  
  },Message:{
    color:'red',
    alignSelf:'center',
    fontWeight:'bold',
    fontSize:16,
  }
});
