import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import colors from '../../utils/Colors';
const Header = ({title, text }) => {
  return (
    <View style={styles.Header}>
      <Icon name="chevron-left" size={30} color={colors.primary2} style={{left:-10}} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  Header: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.primary2,
    marginTop: 20,
  },
  text: {
    fontSize: 15,
    fontWeight: '400',
    color: colors.secondary2,
    marginTop: 14,
    lineHeight:20
  },
});

export default Header;
