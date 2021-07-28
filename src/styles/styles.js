import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  block: {
    fontWeight: 'bold',
  },
  image: {
    height: 150,
    borderRadius: 10,
    margin: 5,
    position: 'relative',
  },
  box: {
    width: 200,
    backgroundColor: 'gold',
    borderRadius: 10,
    margin: 5,
    padding: 4,
  },

  letters: {
    fontSize: 17,
    fontWeight: 'bold',
    textShadowColor: 'blue',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#3da8ff',
    textAlign: 'center',
    borderRadius: 5,
    position: 'relative',
    margin: 5,
  },
  btn: {
    backgroundColor: '#3da8ff',
    textAlign: 'center',
    width: 200,
    height: 20,
    borderRadius: 5,
    position: 'relative',
    margin: 5,
  },
});

export default styles;
