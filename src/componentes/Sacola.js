import React from 'react';
import {Image, StyleSheet} from 'react-native';

const Sacola = () => {
  const icon = require('../assets/images/icone-sacola.png');
  return <Image source={icon} style={styles.iconeSacola} />;
};

const styles = StyleSheet.create({
  iconeSacola: {
    width: 30,
    height: 30,
  },
});

export default Sacola;
