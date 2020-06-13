import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';
import Sacola from '../../../../componentes/Sacola';

const Cabecalho = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>LIGHTERIA</Text>
      <Sacola />
    </View>
  );
};

export default Cabecalho;
