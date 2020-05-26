import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';

const Cabecalho = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>LIGHTERIA</Text>
    </View>
  );
};

export default Cabecalho;
