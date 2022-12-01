import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#ffffff',
    flex: 1,
    margin: 0,
  },
  center: {
    justifyContent: 'center',
    borderWidth:0,
    alignItems:'center',
    marginTop:'75%',

  },
  img: {
    resizeMode: 'contain',
    width: 350,
    height: 120,
  }
});

export { styles };