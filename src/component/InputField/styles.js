import {ScaledSheet} from 'react-native-size-matters';
import Colors from '../../utils/Colors';

const styles = ScaledSheet.create({
  container: {
    alignSelf:'center'
  },
  inputContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    height: 55,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#C6C6C6',
    paddingHorizontal: 11,
  },
  input: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 11,
  },
  label: {
    // marginBottom: 10,
    fontSize: 16,
    fontWeight: '500',
    color:Colors.primary2
  },
});

export default styles;
