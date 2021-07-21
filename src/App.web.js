import React from 'react';
import {StyleSheet, Platform, View} from 'react-native';
import Routes from './routes';

const isNative = Platform.OS !== 'web';

const App = () => {
  return (
    <View style={styles.container}>
      <Routes />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    overflow: 'scroll,',
    justifyContent: 'space-evenly',
  },

  block: {
    fontWeight: 'bold',
  },
});

export default App;
